import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-matrix-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-green-300 text-sm font-jetbrains-mono">
            <span className="text-matrix-400">&gt;</span> © {new Date().getFullYear()} PORTFOLIO.EXE | Built with NEXT.JS && TAILWIND.CSS
          </p>
          <p className="text-green-200 text-xs mt-2 font-share-tech-mono">
            <span className="text-matrix-400">&gt;&gt;&gt;</span> Deployed on{' '}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-matrix-400 underline transition-colors duration-200"
            >
              VERCEL.COM
            </a>{' '}
            | Free hosting protocol active
          </p>
          <div className="mt-4 text-green-400 font-jetbrains-mono text-xs">
            &gt; System status: ONLINE <span className="animate-terminal-blink text-matrix-400">●</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
