import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Gift } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-pink-600/90 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-center gap-2 mb-4 ">
              <Link href="/" className='bg-white rounded-xl p-2'>
            <Image 
             
              src="/logo.png"  
              alt="GIFTSUNBOUND"
              width={120}
              height={90}
            />
          </Link>
            </div>
            <p className="text-sm text-pink-100 mb-4">
              CIN: U47912PN2025OPC237247
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <Link 
                href="/facebook" 
                className=" p-2 rounded-full hover:bg-opacity-30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="/instagram" 
                className=" p-2 rounded-full hover:bg-opacity-30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="/linkedin" 
                className=" p-2 rounded-full hover:bg-opacity-30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="/youtube" 
                className=" p-2 rounded-full hover:bg-opacity-30 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link 
                href="/location" 
                className=" p-2 rounded-full hover:bg-opacity-30 transition-colors"
                aria-label="Location"
              >
                <MapPin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/hot-deals" className="text-pink-100 hover:text-white transition-colors">
                  Hot Deals
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-pink-100 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-pink-100 hover:text-white transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-pink-100 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partner</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/become-merchant" className="text-pink-100 hover:text-white transition-colors">
                  Become a Merchant
                </Link>
              </li>
              <li>
                <Link href="/corporate-gifting" className="text-pink-100 hover:text-white transition-colors">
                  Corporate Gifting
                </Link>
              </li>
              <li>
                <Link href="/affiliate-program" className="text-pink-100 hover:text-white transition-colors">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-pink-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-pink-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-pink-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-pink-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-pink-100 hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-pink-100 hover:text-white transition-colors">
                  Privacy and Policies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-pink-400 pt-6 text-center">
          <p className="text-pink-100 text-sm">
            © 2025 Giftsunbound (OPC) Pvt. Ltd. | With <span className='brightness-50'>❤️</span> by NextDigit Software
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;