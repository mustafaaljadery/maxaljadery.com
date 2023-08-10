import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Header() {
  const [pathname, setPathname] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setPathname(router.pathname);
    }
  }, [router.isReady]);

  return (
    <header className="w-full flex flex-col justify-center items-center mt-12 md:mt-24">
      <div className="w-[95%] md:w-3/4 xl:w-1/2 flex flex-row justify-between items-between">
        <Link
          href="/"
          className="font-bold hover:opacity-90 text-xl md:text-2xl text-[#363636]"
        >
          Max Aljadery
        </Link>
        <div className="flex flex-row my-auto space-x-5">
          <Link
            href="/"
            className={
              'md:text-lg ' +
              (pathname == '/'
                ? 'font-medium text-gray-700'
                : 'text-gray-500')
            }
          >
            home
          </Link>
          <Link
            href="/work"
            className={
              'md:text-lg ' +
              (pathname == '/work'
                ? 'font-medium text-gray-700'
                : 'text-gray-500')
            }
          >
            work
          </Link>
          <Link
            href="/writing"
            className={
              'md:text-lg ' +
              (pathname == '/writing'
                ? 'font-medium text-gray-700'
                : 'text-gray-500')
            }
          >
            writing
          </Link>
          {/*
          <Link
            href="/resume"
            className={
              'text-lg ' +
              (pathname == '/resume'
                ? 'font-medium text-gray-700'
                : 'text-gray-500')
            }
          >
            resume
          </Link>
          */}
        </div>
      </div>
    </header>
  );
}
