import { NextRequest, NextResponse } from 'next/server'

const BUNNY_STORAGE_ZONE = process.env.BUNNY_STORAGE_ZONE || process.env.NEXT_PUBLIC_BUNNY_STORAGE_ZONE || 'villaqr'
const BUNNY_API_KEY = process.env.BUNNY_API_KEY || ''

export async function DELETE(request: NextRequest) {
	try {
		if (!BUNNY_API_KEY) {
			return NextResponse.json({ success: false, message: 'Sunucu yapılandırması eksik (BUNNY_API_KEY)' }, { status: 500 })
		}

		const { searchParams } = new URL(request.url)
		const urlParam = searchParams.get('url')
		if (!urlParam) {
			return NextResponse.json({ success: false, message: 'url parametresi gerekli' }, { status: 400 })
		}

		const parts = urlParam.split('.b-cdn.net/')
		if (parts.length !== 2) {
			return NextResponse.json({ success: false, message: 'Geçersiz CDN URL' }, { status: 400 })
		}
		const filePath = parts[1]

		const resp = await fetch(`https://storage.bunnycdn.com/${BUNNY_STORAGE_ZONE}/${filePath}`,
			{
				method: 'DELETE',
				headers: { 'AccessKey': BUNNY_API_KEY }
			}
		)

		if (!resp.ok) {
			const err = await resp.text()
			return NextResponse.json({ success: false, message: 'Bunny silme hatası', error: err }, { status: resp.status })
		}

		return NextResponse.json({ success: true, message: 'Dosya silindi' })
	} catch (error: any) {
		return NextResponse.json({ success: false, message: 'Silme sırasında beklenmeyen bir hata', error: error?.message || 'Unknown error' }, { status: 500 })
	}
} 