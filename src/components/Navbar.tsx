'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Professional Experience', href: '/professional' },
  { name: 'Personal Experience', href: '/personal' },
  { name: 'About Me', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-black shadow-sm border-b-2 border-matrix-400 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-orbitron font-bold text-matrix-400">
                <span className="text-green-300">[</span>PORTFOLIO<span className="text-green-300">]</span>
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium font-share-tech-mono ${
                  pathname === item.href
                    ? 'border-matrix-400 text-matrix-400'
                    : 'border-transparent text-green-300 hover:border-green-300 hover:text-matrix-400'
                }`}
              >
                &gt; {item.name.toUpperCase().replace(' ', '_')}
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <details className="dropdown">
              <summary className="btn btn-ghost btn-circle text-matrix-400 border-matrix-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <ul className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 right-0 border-2 border-matrix-400">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`font-share-tech-mono ${
                        pathname === item.href ? 'bg-matrix-400 text-white' : 'text-green-300 hover:text-matrix-400'
                      }`}
                    >
                      &gt; {item.name.toUpperCase().replace(' ', '_')}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
}
