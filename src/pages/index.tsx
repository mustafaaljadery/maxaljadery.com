import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import Head from 'next/head';

const tools = [
  { link: '', image: '/tools/nodejs.png' },
  { link: '', image: '/tools/typescript.png' },
  { link: '', image: '/tools/cp.png' },
  { link: '', image: '/tools/go.png' },
  { link: '', image: '/tools/python.png' },
  { link: '', image: '/tools/remix.png' },
  { link: '', image: '/tools/nextjs.png' },
  { link: '', image: '/tools/react.png' },
  { link: '', image: '/tools/svelte.png' },
  { link: '', image: '/tools/django.png' },
  { link: '', image: '/tools/express.png' },
  { link: '', image: '/tools/postgres.png' },
  { link: '', image: '/tools/mysql.png' },
  { link: '', image: '/tools/clickhouse.svg' },
  { link: '', image: '/tools/aws.png' },
  { link: '', image: '/tools/gc.png' },
  { link: '', image: '/tools/fly.png' },
  { link: '', image: '/tools/docker.png' },
  { link: '', image: '/tools/redis.svg' },
  { link: '', image: '/tools/pinecone.png' },
  { link: '', image: '/tools/git.png' },
  { link: '', image: '/tools/github.png' },
  { link: '', image: '/tools/huggingface.png' },
  { link: '', image: '/tools/langchain.png' },
  { link: '', image: '/tools/prisma.svg' },
  { link: '', image: '/tools/graphql.png' },
  { link: '', image: '/tools/excel.png' },
  { link: '', image: '/tools/pytorch.png' },
  { link: '', image: '/tools/snowflake.png' },
  { link: '', image: '/tools/figma.jpg' },
  { link: '', image: '/tools/eth.png' },
  { link: '', image: '/tools/sol.png' },
  { link: '', image: '/tools/apt.png' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Max Aljadery</title>
      </Head>
      <Header />
      <main className="flex flex-col mt-14 justify-center items-center w-full">
        <div className="w-1/2 flex flex-col">
          <div className="flex flex-row space-x-4">
            <Image
              src="/mustafa.jpg"
              alt="Image of me"
              width={76}
              height={76}
              className="rounded-full my-auto"
            />
            <div className="flex flex-col space-y-1 my-auto">
              <h1 className="font-bold text-xl text-[#363636]">
                Mustafa (Max) Aljadery
              </h1>
              <p className="font-light text-gray-500">
                I like to build!
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col">
            <p className="text-xl font-light text-gray-500">
              <span className="italic font-medium text-[#363636]">
                Software Engineering
              </span>
              ,{' '}
              <span className="italic font-medium text-[#363636]">
                ML
              </span>
              ,{' '}
              <span className="italic font-medium text-[#363636]">
                Design
              </span>
              , and{' '}
              <span className="italic font-medium text-[#363636]">
                Finance
              </span>
              .
            </p>
            <p className="mt-8 text-xl text-gray-500 font-light">
              <span className="text-[#363636] font-semibold">
                Difficult Scientific
              </span>{' '}
              and{' '}
              <span className="text-[#363636] font-semibold">
                Engineering Problems
              </span>{' '}
              are the{' '}
              <span className="text-[#363636] font-bold">ONLY</span>{' '}
              things I care about.
            </p>
            <p className="mt-6 text-xl text-gray-500 font-light">
              My current interests are{' '}
              <span className="font-medium text-[#363636]">AI</span>,{' '}
              <span className="font-medium text-[#363636]">
                Systems
              </span>
              , and{' '}
              <span className="font-medium text-[#363636]">
                Hard Tech
              </span>
              .
            </p>
          </div>
          <div className="flex flex-col mt-20">
            <p className="font-bold text-[#363636] text-2xl">
              About Me
            </p>
            <ul className="mt-5 list-disc flex flex-col space-y-4">
              <li className="text-lg ml-12 font-light">
                I'm extremely competitive,{' '}
                <span className="italic">
                  I will run through walls to succeed
                </span>
                .
              </li>
              <li className="text-lg ml-12 font-light">
                I take work very seriously.
              </li>
              <li className="text-lg ml-12 font-light">
                I'm "done by noon," not "by end of week." Time is the
                denominator.
              </li>
              <li className="text-lg ml-12 font-light">
                "Don't try to impress, just be impressive."
              </li>
              <li className="text-lg ml-12 font-light">
                I have unlimited energy for Engineering, Design and
                Finance.
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-20">
            <h2 className="font-bold text-[#363636] text-2xl">
              Tools I'm Highly Proficient At
            </h2>
            <div className="mt-5 flex flex-row flex-wrap">
              {tools.map((tool: any, index: number) => {
                return (
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="p-5"
                  >
                    <img
                      className="h-[40px] rounded"
                      src={tool.image}
                      key={index}
                    />
                  </a>
                );
              })}
            </div>
            <p className="text-center text-sm font-regular mt-1.5 text-gray-400">
              {' '}
              + some more
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
