// Bunny.net API utility for image uploads
export interface BunnyUploadResponse {
  success: boolean;
  message: string;
  url?: string;
  error?: string;
}

export interface SettenKarelerImage {
  id: number;
  title: string;
  description?: string;
  image_url: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Bunny.net API configuration
const BUNNY_STORAGE_ZONE = process.env.NEXT_PUBLIC_BUNNY_STORAGE_ZONE || 'villaqrmenu';
const BUNNY_API_KEY = process.env.BUNNY_API_KEY || '';
const BUNNY_REGION = process.env.NEXT_PUBLIC_BUNNY_REGION || 'de';

// Upload image to Bunny.net
export const uploadImageToBunny = async (file: File, folder: string = 'nora/norasettenkareler'): Promise<BunnyUploadResponse> => {
  try {
    // Validate file
    if (!file) {
      return { success: false, message: 'Dosya seçilmedi' };
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return { success: false, message: 'Sadece JPEG, PNG ve WebP dosyaları kabul edilir' };
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return { success: false, message: 'Dosya boyutu 10MB\'dan büyük olamaz' };
    }

    // Generate unique filename
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const fileName = `nora_yapım_settenkareler-${timestamp}.${fileExtension}`;
    const filePath = `${folder}/${fileName}`;

    // Create form data
    const formData = new FormData();
    formData.append('file', file);

    // Upload to Bunny.net
    const response = await fetch(`https://storage.bunnycdn.com/${BUNNY_STORAGE_ZONE}/${filePath}`, {
      method: 'PUT',
      headers: {
        'AccessKey': BUNNY_API_KEY,
        'Content-Type': file.type,
      },
      body: file
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Bunny.net upload error:', errorData);
      return { 
        success: false, 
        message: 'Dosya yüklenirken bir hata oluştu',
        error: errorData
      };
    }

    // Construct CDN URL
    const cdnUrl = `https://${BUNNY_STORAGE_ZONE}.b-cdn.net/${filePath}`;

    return {
      success: true,
      message: 'Dosya başarıyla yüklendi',
      url: cdnUrl
    };

  } catch (error) {
    console.error('Upload error:', error);
    return {
      success: false,
      message: 'Dosya yüklenirken bir hata oluştu',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Delete image from Bunny.net
export const deleteImageFromBunny = async (imageUrl: string): Promise<BunnyUploadResponse> => {
  try {
    // Extract file path from CDN URL
    const urlParts = imageUrl.split('.b-cdn.net/');
    if (urlParts.length !== 2) {
      return { success: false, message: 'Geçersiz dosya URL\'i' };
    }

    const filePath = urlParts[1];

    const response = await fetch(`https://storage.bunnycdn.com/${BUNNY_STORAGE_ZONE}/${filePath}`, {
      method: 'DELETE',
      headers: {
        'AccessKey': BUNNY_API_KEY,
      }
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Bunny.net delete error:', errorData);
      return { 
        success: false, 
        message: 'Dosya silinirken bir hata oluştu',
        error: errorData
      };
    }

    return {
      success: true,
      message: 'Dosya başarıyla silindi'
    };

  } catch (error) {
    console.error('Delete error:', error);
    return {
      success: false,
      message: 'Dosya silinirken bir hata oluştu',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}; 