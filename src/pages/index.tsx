import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <header className="w-full flex flex-row ">
        <div className="flex flex-row space-x-1">
          <p>Max Aljadery</p>
        </div>
        <div className="flex flex-row space-x-3">
          <Link href="/blog">
            <a className="">Blog</a>
          </Link>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs silka-semibold text-gray-500"
          >
            Twitter
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Linkedin
          </a>
        </div>
      </header>
      <div className="py-24 flex flex-col"></div>
      <footer></footer>
    </main>
  );
}
