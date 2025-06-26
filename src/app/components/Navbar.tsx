"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  ShoppingCart, 
  User, 
  Home, 
  Store, 
  Grid3X3, 
  Tag 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '/', label: 'HOME', icon: Home },
    { href: '/shop', label: 'SHOP', icon: Store },
    { href: '/category', label: 'CATEGORY', icon: Grid3X3 },
    { href: '/brands', label: 'BRAND', icon: Tag },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-b-pink-600/50 ">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-22">
          {/* Logo */}
          <div className="flex items-center">
                <div className="flex items-center">
                <Link href="/">
            <Image
              src="/logo.png"  
              alt="GIFTSUNBOUND"
              width={120}
              height={50}
            />
          </Link>
        </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors duration-200 group"
                >
                  <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/cart" 
              className="relative p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-colors duration-200 group"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-medium group-hover:scale-110 transition-transform">
                0
              </span>
            </Link>
            <Link 
              href="/profile"
              className="p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-colors duration-200"
            >
              <User className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="pt-4 border-t border-pink-100">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 py-3 px-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors duration-200 group"
                >
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            
            {/* Mobile Icons */}
            <div className="flex items-center space-x-4 pt-4 mt-4 border-t border-pink-100">
              <Link 
                href="/cart"
                onClick={closeMenu}
                className="flex items-center space-x-2 relative p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-colors duration-200 group"
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-medium group-hover:scale-110 transition-transform">
                  0
                </span>
                <span className="ml-2 font-medium">Cart</span>
              </Link>
              <Link 
                href="/profile"
                onClick={closeMenu}
                className="flex items-center space-x-2 p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-colors duration-200"
              >
                <User className="w-6 h-6" />
                <span className="ml-2 font-medium">Profile</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;