import { NextRequest, NextResponse } from 'next/server'

const BUNNY_STORAGE_ZONE = process.env.BUNNY_STORAGE_ZONE || process.env.NEXT_PUBLIC_BUNNY_STORAGE_ZONE || 'villaqr'
const BUNNY_API_KEY = process.env.BUNNY_API_KEY || ''
const BUNNY_CDN_HOST = process.env.BUNNY_CDN_HOST || 'villaqrmenu.b-cdn.net'

export async function POST(request: NextRequest) {
	try {
		console.log('Upload request received')
		console.log('BUNNY_STORAGE_ZONE:', BUNNY_STORAGE_ZONE)
		console.log('BUNNY_API_KEY exists:', !!BUNNY_API_KEY)
		console.log('BUNNY_CDN_HOST:', BUNNY_CDN_HOST)

		if (!BUNNY_API_KEY) {
			console.error('Missing BUNNY_API_KEY')
			return NextResponse.json({ success: false, message: 'Sunucu yapılandırması eksik (BUNNY_API_KEY)' }, { status: 500 })
		}

		const formData = await request.formData()
		const file = formData.get('file') as File | null
		const folder = (formData.get('folder') as string | null) || 'nora/norablog'
		const nameHint = (formData.get('nameHint') as string | null) || 'blog'

		console.log('File received:', file?.name, file?.size, file?.type)
		console.log('Folder:', folder)
		console.log('Name hint:', nameHint)

		if (!file) {
			return NextResponse.json({ success: false, message: 'Dosya bulunamadı' }, { status: 400 })
		}

		const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
		if (!allowedTypes.includes(file.type)) {
			return NextResponse.json({ success: false, message: 'Sadece JPEG, PNG ve WebP dosyaları kabul edilir' }, { status: 400 })
		}

		const maxSize = 10 * 1024 * 1024
		if (file.size > maxSize) {
			return NextResponse.json({ success: false, message: 'Dosya boyutu 10MB\'dan büyük olamaz' }, { status: 400 })
		}

		const timestamp = Date.now()
		const fileExtension = (file.name.split('.').pop() || 'jpg').toLowerCase()
		const safeName = nameHint.replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase() || 'blog'
		const fileName = `${safeName}-${timestamp}.${fileExtension}`
		const filePath = `${folder}/${fileName}`

		console.log('Uploading to Bunny:', filePath)
		console.log('Bunny URL:', `https://storage.bunnycdn.com/${BUNNY_STORAGE_ZONE}/${filePath}`)

		const bunnyRes = await fetch(`https://storage.bunnycdn.com/${BUNNY_STORAGE_ZONE}/${filePath}`,
			{
				method: 'PUT',
				headers: {
					'AccessKey': BUNNY_API_KEY,
					'Content-Type': file.type || 'application/octet-stream'
				},
				body: file
			}
		)

		console.log('Bunny response status:', bunnyRes.status)
		console.log('Bunny response headers:', Object.fromEntries(bunnyRes.headers.entries()))

		if (!bunnyRes.ok) {
			const errText = await bunnyRes.text()
			console.error('Bunny upload failed:', errText)
			return NextResponse.json({ 
				success: false, 
				message: `Bunny yükleme hatası (${bunnyRes.status})`, 
				error: errText,
				details: {
					status: bunnyRes.status,
					storageZone: BUNNY_STORAGE_ZONE,
					filePath: filePath
				}
			}, { status: bunnyRes.status })
		}

		// URL'yi düzelt: villaqr.b-cdn.net yerine villaqrmenu.b-cdn.net kullan
		let url = `https://${BUNNY_CDN_HOST}/${filePath}`
		url = url.replace('villaqr.b-cdn.net', 'villaqrmenu.b-cdn.net')
		console.log('Upload successful, URL:', url)
		return NextResponse.json({ success: true, message: 'Dosya başarıyla yüklendi', url })
	} catch (error: any) {
		console.error('Upload error:', error)
		return NextResponse.json({ 
			success: false, 
			message: 'Yükleme sırasında beklenmeyen bir hata', 
			error: error?.message || 'Unknown error',
			stack: error?.stack
		}, { status: 500 })
	}
} 