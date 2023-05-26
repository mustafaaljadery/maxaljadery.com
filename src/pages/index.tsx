import Image from 'next/image';
import threads from '../../public/twitter_threads.json';
import blog_posts from '../../public/blog_posts.json';
import PageHead from '@/components/PageHead';

export default function Home({ data }: any) {
  return (
    <PageHead>
      <div className="flex flex-col justify-center items-center">
        <header className="py-5 flex flex-row justify-between items-between w-1/2 ">
          <div className="flex flex-row space-x-3 my-auto">
            <Image
              alt="profile picture"
              src="/profile.jpg"
              width={36}
              height={36}
              className="my-auto rounded"
            />
            <p className="text-lg my-auto text-[#363636] silka-medium">
              Max Aljadery
            </p>
          </div>
          <div className="flex flex-row space-x-5 my-auto">
            <a
              href="https://github.com/mustafaaljadery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm silka-semibold text-gray-600 hover:opacity-80"
            >
              Github
            </a>
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
          <div className="flex mt-12 flex-col space-y-4">
            <h2 className="text-sm silka-semibold text-gray-600">
              TWITTER THREADS
            </h2>
            <div className="flex flex-col space-y-2">
              {data.threads.length == 0 ? (
                <div className="p-8 rounded-lg border border-dashed flex flex-col justify-center items-center">
                  <div className="p-2 rounded-full bg-[#E0ECF5]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#1D9BF0"
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      />
                    </svg>
                  </div>
                  <p className="text-2xl mt-4 text-center text-[#363636] silka-bold">
                    No Twitter Threads Yet...
                  </p>
                  <span className="text-xs text-center silka-regular text-gray-500 mt-2">
                    I will be writing more in the future about product
                    led growth, growing a small startup, engineering,
                    finance, and deep learning.
                  </span>
                </div>
              ) : (
                <>
                  {data.threads.map((thread: any, index: number) => {
                    return (
                      <a
                        key={index}
                        href={thread?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        {thread?.title}
                      </a>
                    );
                  })}
                </>
              )}
            </div>
          </div>
          <div className="mt-12 flex flex-col space-y-4">
            <h2 className="text-sm silka-semibold text-gray-600">
              BLOG POSTS
            </h2>
            <div className="flex flex-col space-y-2">
              {data.blog_posts.length == 0 ? (
                <div className="p-8 rounded-lg border border-dashed flex flex-col justify-center items-center">
                  <div className="p-2 rounded-full bg-[#F5EFEF]">
                    <Image
                      src="/books.png"
                      alt="stack of books"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="text-2xl mt-4 text-center text-[#363636] silka-bold">
                    No Blog Posts Yet...
                  </p>
                  <span className="text-xs text-center silka-regular text-gray-500 mt-2">
                    I will be writing more blog posts in the future,
                    these blog post witll be on Slack and I will just
                    share my general ideas about startups, deep
                    learning and finance more in depth.
                  </span>
                </div>
              ) : (
                <>
                  {data.blog_posts.map((post: any, index: number) => {
                    return (
                      <a
                        key={index}
                        href={post?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        {post?.title}
                      </a>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageHead>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      data: { threads, blog_posts },
    },
  };
};
