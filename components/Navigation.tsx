import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      if (!isMobileView && isMenuOpen) {
        setIsMenuOpen(false);
      }
      const nav = document.querySelector('nav');
      if (nav) {
        setNavHeight(nav.offsetHeight);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-black">
        <div className="max-w-[1728px] mx-auto">
          <div className="flex justify-between items-center px-16 py-6">
            <Link href="/" className="relative h-12 w-48 pt-[2px] transition-all duration-300 ease-in-out">
              <Image
                src="./logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-end transition-all duration-300 ease-in-out">
              {menuItems.map((item, index) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    ${router.pathname === item.path ? 'text-black' : 'text-gray-500 hover:text-black'}
                    uppercase tracking-wider transition-all duration-300 ease-in-out font-light
                    text-[2rem] 2xl:text-[2rem] xl:text-[1.8rem] lg:text-[1.6rem] md:text-[1.4rem]
                    ml-[5vw] first:ml-0
                    min-w-max leading-none
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black"
              onClick={toggleMenu}
            >
              <span className="text-lg uppercase tracking-wider">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed top-[96px] left-0 right-0 bg-white z-[46] transition-transform duration-500 ease-in-out md:hidden
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-[400px]'}
        `}
      >
        <div className="border-b border-black">
          <div className="max-w-[1728px] mx-auto">
            <div className="divide-y divide-black">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    ${router.pathname === item.path ? 'text-black' : 'text-gray-500 hover:text-black'}
                    text-[2rem] uppercase tracking-wider transition-colors duration-300 font-light
                    h-[96px] flex items-center px-16
                    border-black
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation; 