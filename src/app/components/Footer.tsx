import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Nora Yapım</h3>
          <p className="text-gray-400">
            Dijital markaların hikayelerini güçlü videolarla anlatan yaratıcı bir prodüksiyon şirketi.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Hızlı Menü</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-gray-300">Ana Sayfa</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">Hakkımızda</Link></li>
            <li><Link href="/portfolio" className="hover:text-gray-300">Portfolyo</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">İletişim</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">İletişim</h4>
          <div className="space-y-2">
            <p>📞 +90 (555) 123 45 67</p>
            <p>✉️ info@norayapim.com</p>
            <p>📍 İstanbul, Türkiye</p>
          </div>

          {/* Social Media Links */}
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
            <a href="#" className="hover:text-gray-300">YouTube</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Nora Yapım. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}

export default Footer 