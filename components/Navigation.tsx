import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Navigation = () => {
  const router = useRouter();

  const menuItems = [
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full bg-white z-50 border-b border-black ${inter.className}`}>
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-6 transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative h-12 w-48 pt-[2px] transition-all duration-300 ease-in-out">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <div className="flex space-x-12 transition-all duration-300 ease-in-out">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${
                  router.pathname === item.path
                    ? 'text-black'
                    : 'text-gray-500 hover:text-black'
                } text-[2rem] uppercase tracking-wider transition-all duration-300 ease-in-out font-light`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 