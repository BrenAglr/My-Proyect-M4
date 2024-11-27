"use client"

// react
import React, { useEffect, useState } from 'react';

// cookies
import Cookies from 'js-cookie';

// next
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// assets
import Logo from '@/assets/logo.png';
import SearchIcon from '@/assets/lupa.png';
import CartIcon from '@/assets/shoppingcarts.png';
import UserIcon from '@/assets/user.png';

// Navbar.tsx
export const Navbar: React.FC = () => {
  const pathname = usePathname()

  const [isClick, setIsClick] = useState(false);
  const toggleMenu = (): void => {
    setIsClick(!isClick);
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("userData");

    token? setIsLoggedIn(true) : setIsLoggedIn(false)
        
      }, [pathname]);

  return (
    <nav className="bg-bondiblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded-md text-janna hover:text-janna focus:outline-none focus:ring-2 focus:ring-inset focus:ring-janna"
            onClick={toggleMenu}
          >
            {isClick ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Left Section - Menu Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <div className="text-janna hover:bg-janna hover:text-bondiblue rounded-lg p-2">Home</div>
          </Link>
          
            <div className="text-janna hover:bg-janna hover:text-bondiblue rounded-lg p-2 cursor-pointer">Contact</div>
          
          <Link href="/about">
            <div className="text-janna hover:bg-janna hover:text-bondiblue rounded-lg p-2">About Us</div>
          </Link>
        </div>

        {/* Center Section - Logo */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={50} height={50} className="cursor-pointer" />
          </Link>
        </div>

        {/* Right Section - Search and Cart / Login and Register buttons */}
        {!isLoggedIn ? (
            <div className="flex items-center space-x-4 mt-4">
              <Link href="/login">
                <button className="bg-janna text-bondiblue w-full py-2 px-4 rounded mb-4 hover:bg-pinkish hover:text-janna" >Login</button>
              </Link>
              <Link href="/register">
                <button className="bg-janna text-bondiblue w-full py-2 px-4 rounded mb-4 hover:bg-pinkish hover:text-janna" >Register</button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
                <Image src={SearchIcon} alt="Buscar" width={25} height={25} className="cursor-pointer" />
                <Link href="/shopping">
                <Image src={CartIcon} alt="Carrito" width={25} height={25} className="cursor-pointer" />
              </Link>
              <Link href="/userProfile">
                <Image src={UserIcon} alt="User" width={30} height={30} className="cursor-pointer"/>
              </Link>

            </div>
          )}

      </div>

      {/* Mobile Menu */}
      {isClick && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <div className="text-janna hover:bg-janna hover:text-bondiblue rounded-lg p-2">Home</div>
          </Link>

            <div className="text-janna hover:bg-janna hover:text-bondiblue rounded-lg p-2">Contact</div>
      
          <Link href="/about">
            <div className="text-janna hover:bg-janna hover:text-bondiblue rounded-lg p-2">About Us</div>
          </Link>
        </div>
      )}
      
    </nav>
  );
}

export default Navbar;
