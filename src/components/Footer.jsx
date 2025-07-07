import Link from 'next/link'
import { FaInstagram, FaTwitter, FaFacebook, FaPinterest } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#ff004a] text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Malviya Studio</h3>
            <p className="text-gray-100">
              Capturing life's precious moments with creativity and passion.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-100 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-100 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-100 hover:text-white">
                  Wedding Photography
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-100 hover:text-white">
                  Portrait Sessions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-100 hover:text-white">
                  Commercial Shoots
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-100 hover:text-white">
                  Event Coverage
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/malviya__studio/" className="text-gray-100 hover:text-black">
                <FaInstagram size={20} />
              </a>
              {/* <a href="#" className="text-gray-100 hover:text-black">
                <FaTwitter size={20} />
              </a> */}
              <a href="https://www.facebook.com/malviyastudio1" className="text-gray-100 hover:text-black">
                <FaFacebook size={20} />
              </a>
              {/* <a href="#" className="text-gray-100 hover:text-black">
                <FaPinterest size={20} />
              </a> */}
            </div>
            <p className="text-gray-100 mt-4">malviyastudio1@gmail.com</p>
            <p className="text-gray-100">8299338931</p>
            <p className="text-gray-100">9415225291</p>
          </div>
        </div>
        <div className="border-t border-white mt-8 pt-8 text-center text-gray-100">
          <p>&copy; {new Date().getFullYear()} malviyastudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}