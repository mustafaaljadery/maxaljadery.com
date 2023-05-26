import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <header className="py-5 flex flex-row justify-between items-between w-1/2 ">
        <div className="flex flex-row space-x-2.5 my-auto">
          <Image
            alt="profile picture"
            src="/profile.jpg"
            width={38}
            height={38}
            className="my-auto"
          />
          <p className="text-lg my-auto text-[#363636] silka-medium">
            Max Aljadery
          </p>
        </div>
        <div className="flex flex-row space-x-5 my-auto">
          <Link
            href="/blog"
            className="text-sm silka-semibold text-gray-600 hover:opacity-80"
          >
            Blog
          </Link>
          <a
            href="https://twitter.com/maxaljadery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm silka-semibold text-gray-600 hover:opacity-80"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/mustafaaljadery/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm silka-semibold text-gray-600 hover:opacity-80"
          >
            Linkedin
          </a>
        </div>
      </header>
      <div className="py-10 flex flex-col w-1/3">
        <h1 className="text-2xl silka-bold text-gray-900">BIO</h1>
        <p className="mt-4 text-xl silka-regular text-[#363636]">
          I'm working on{' '}
          <span className="text-xl silka-semibold text-gray-900">
            Garza
          </span>
          , a parent company that owns{' '}
          <a
            href="https://trydisperse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl silka-semibold text-gray-900 underline hover:opacity-90"
          >
            Disperse
          </a>
          , <span className="italic">stealth</span>,{` `}
          <span className="italic">stealth</span>. My interests
          include Software Engineering, Deep Learning, and Finance.
        </p>
      </div>
      <footer></footer>
    </main>
  );
}
