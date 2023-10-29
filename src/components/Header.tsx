import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const [pathname, setPathname] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setPathname(router.pathname);
    }
  }, [router.isReady]);

  return (
    <header className="w-full flex flex-col justify-center items-center mt-6 md:mt-16">
      <div className="w-[95%] md:w-3/4 xl:w-1/2 flex flex-row justify-between items-between">
        <Link
          href="/"
          className="font-regular hover:opacity-90 text-xl md:text-2xl text-[#363636]"
        >
          Mustafa Aljadery
        </Link>
        <div className="flex flex-row my-auto space-x-5">
          <Link
            href="/"
            className={
              "md:text-base text-sm font-semibold " +
              (pathname == "/" ? "font-medium text-[#363636]" : "text-gray-600")
            }
          >
            HOME
          </Link>
          <Link
            href="/work"
            className={
              "text-sm md:text-base font-semibold " +
              (pathname == "/work"
                ? "font-medium text-[#363636]"
                : "text-gray-600")
            }
          >
            WORK
          </Link>
          <Link
            href="/writing"
            className={
              "md:text-base text-sm font-semibold " +
              (pathname == "/writing"
                ? "font-medium text-[#363636]"
                : "text-gray-600")
            }
          >
            WRITING
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
