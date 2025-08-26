'use client'

import { useCallback, useRef, useState } from 'react'

interface ImageUploaderProps {
	label?: string
	initialUrl?: string
	folder?: string
	nameHint?: string
	onChange: (url: string) => void
	className?: string
}

export default function ImageUploader({ label, initialUrl, folder = 'nora/norablog', nameHint = 'blog', onChange, className }: ImageUploaderProps) {
	const [previewUrl, setPreviewUrl] = useState<string | null>(initialUrl || null)
	const [uploading, setUploading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const inputRef = useRef<HTMLInputElement | null>(null)

	const handleFiles = useCallback(async (file: File) => {
		setError(null)
		if (!file) return
		const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
		if (!allowed.includes(file.type)) {
			setError('Sadece JPEG, PNG ve WebP dosyaları kabul edilir')
			return
		}
		if (file.size > 10 * 1024 * 1024) {
			setError('Dosya boyutu 10MB\'dan büyük olamaz')
			return
		}
		setUploading(true)
		try {
			const data = new FormData()
			data.append('file', file)
			data.append('folder', folder)
			data.append('nameHint', nameHint)
			const res = await fetch('/api/media/upload', { method: 'POST', body: data })
			const json = await res.json()
			if (!res.ok || !json?.success) {
				throw new Error(json?.message || 'Yükleme başarısız')
			}
			setPreviewUrl(json.url)
			onChange(json.url)
		} catch (e: any) {
			setError(e?.message || 'Yükleme başarısız')
		} finally {
			setUploading(false)
		}
	}, [folder, nameHint, onChange])

	const onDrop: React.DragEventHandler<HTMLDivElement> = async (e) => {
		e.preventDefault()
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			await handleFiles(e.dataTransfer.files[0])
		}
	}

	const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
		const file = e.target.files?.[0]
		if (file) await handleFiles(file)
	}

	return (
		<div className={className}>
			{label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
			<div
				onDrop={onDrop}
				onDragOver={(e) => e.preventDefault()}
				className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer ${uploading ? 'opacity-70' : ''}`}
				onClick={() => inputRef.current?.click()}
			>
				{previewUrl ? (
					<div className="flex flex-col items-center gap-2">
						<img src={previewUrl} alt="preview" className="max-h-40 rounded" />
						<p className="text-sm text-gray-600">Değiştirmek için tıklayın veya sürükleyin</p>
					</div>
				) : (
					<div className="text-gray-500">
						<p className="font-medium">Görseli buraya sürükleyin</p>
						<p className="text-sm">veya tıklayıp seçin (JPEG/PNG/WebP, max 10MB)</p>
					</div>
				)}
				<input ref={inputRef} type="file" accept="image/*" onChange={onChangeInput} className="hidden" />
			</div>
			{uploading && <p className="text-sm text-blue-600 mt-2">Yükleniyor...</p>}
			{error && <p className="text-sm text-red-600 mt-2">{error}</p>}
		</div>
	)
} 