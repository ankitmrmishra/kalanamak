import Link from "next/link";
import { Facebook, Instagram, Twitter, Wheat } from "lucide-react";

import { Mukta } from "next/font/google";

const mukta = Mukta({ weight: ["600"], subsets: ["devanagari"] });

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div
                className={`logo ${mukta.className} text-[#026147] flex justify-center items-center align-middle text-3xl gap-2 text-center`}
              >
                <span className="bg-[#026147] rounded-full text-[#fef3e9] p-2">
                  <Wheat />
                </span>
                कालानमक
              </div>
            </Link>
            <p className="text-sm text-gray-600">
              Experience the authentic taste of premium quality Kalanamak rice,
              sustainably cultivated and organically sourced.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Story", "Products", "Services", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-gray-600 hover:text-[#0B6B3D] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Email: info@kalanamak.com</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: Siddharthnagar, Uttar Pradesh, India</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Subscribe to Newsletter
            </h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B6B3D]"
              />
              <button
                type="submit"
                className="w-full bg-[#0B6B3D] text-white px-4 py-2 rounded-md text-sm hover:bg-[#095332] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Kalanamak. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-[#0B6B3D]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#0B6B3D]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#0B6B3D]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
