import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const router = useRouter();
  const path = currentPath || router.pathname;

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const isActive = (href: string) => {
    if (href === '/works' && path.startsWith('/works')) {
      return true;
    }
    return path === href;
  };

  return (
    <>
      {/* Desktop & Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="border-b border-black">
          <div className="max-w-[1728px] mx-auto px-16">
            <div className="h-24 flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="relative h-12 w-48 pt-[2px] transition-all duration-300 ease-in-out">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-end">
                <Link 
                  href="/about" 
                  className={`text-[2rem] 2xl:text-[2rem] xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] ml-[5vw] ${
                    isActive('/about') ? 'text-black' : 'text-gray-500 hover:text-black'
                  } transition-colors duration-200 uppercase tracking-wider font-light leading-none`}
                >
                  About
                </Link>
                <Link 
                  href="/works"
                  className={`text-[2rem] 2xl:text-[2rem] xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] ml-[5vw] ${
                    isActive('/works') ? 'text-black' : 'text-gray-500 hover:text-black'
                  } transition-colors duration-200 uppercase tracking-wider font-light leading-none`}
                >
                  Works
                </Link>
                <Link 
                  href="/contact"
                  className={`text-[2rem] 2xl:text-[2rem] xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem] ml-[5vw] ${
                    isActive('/contact') ? 'text-black' : 'text-gray-500 hover:text-black'
                  } transition-colors duration-200 uppercase tracking-wider font-light leading-none`}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-lg uppercase tracking-wider text-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden`}
        style={{ top: '96px', height: '144px' }}
      >
        <div className="h-full">
          <Link
            href="/about"
            className={`h-12 flex items-center text-[2rem] uppercase tracking-wider ${
              isActive('/about') ? 'text-black' : 'text-gray-500 hover:text-black'
            } transition-colors duration-200 font-light px-16 border-b border-black`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/works"
            className={`h-12 flex items-center text-[2rem] uppercase tracking-wider ${
              isActive('/works') ? 'text-black' : 'text-gray-500 hover:text-black'
            } transition-colors duration-200 font-light px-16 border-b border-black`}
            onClick={() => setIsMenuOpen(false)}
          >
            Works
          </Link>
          <Link
            href="/contact"
            className={`h-12 flex items-center text-[2rem] uppercase tracking-wider ${
              isActive('/contact') ? 'text-black' : 'text-gray-500 hover:text-black'
            } transition-colors duration-200 font-light px-16 border-b border-black`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
} 