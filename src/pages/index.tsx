import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Head from "next/head";

const tools = [
  { link: "", image: "/tools/nodejs.png", alt: "NodeJS" },
  { link: "", image: "/tools/typescript.png", alt: "TypeScript" },
  { link: "", image: "/tools/cp.png", alt: "C++" },
  { link: "", image: "/tools/go.png", alt: "Go" },
  { link: "", image: "/tools/python.png", alt: "Python" },
  { link: "", image: "/tools/remix.png", alt: "Remix" },
  { link: "", image: "/tools/nextjs.png", alt: "NextJS" },
  { link: "", image: "/tools/react.png", alt: "React" },
  { link: "", image: "/tools/svelte.png", alt: "Svelte" },
  { link: "", image: "/tools/tailwind.png", alt: "Tailwind" },
  { link: "", image: "/tools/django.png", alt: "Django" },
  { link: "", image: "/tools/express.png", alt: "Express" },
  { link: "", image: "/tools/postgres.png", alt: "PostgreSQL" },
  { link: "", image: "/tools/mysql.png", alt: "MySQL" },
  { link: "", image: "/tools/clickhouse.svg", alt: "ClickHouse" },
  { link: "", image: "/tools/socketio.png", alt: "SocketIO" },
  { link: "", image: "/tools/aws.png", alt: "AWS" },
  { link: "", image: "/tools/gc.png", alt: "Google Cloud" },
  { link: "", image: "/tools/fly.png", alt: "Fly" },
  { link: "", image: "/tools/docker.png", alt: "Docker" },
  { link: "", image: "/tools/redis.svg", alt: "Redis" },
  { link: "", image: "/tools/pinecone.png", alt: "Pinecone" },
  { link: "", image: "/tools/git.png", alt: "Git" },
  { link: "", image: "/tools/github.png", alt: "GitHub" },
  { link: "", image: "/tools/huggingface.png", alt: "HuggingFace" },
  { link: "", image: "/tools/langchain.png", alt: "LangChain" },
  { link: "", image: "/tools/prisma.svg", alt: "Prisma" },
  //  { link: '', image: '/tools/graphql.png', alt: 'GraphQL' },
  { link: "", image: "/tools/excel.png", alt: "Excel" },
  { link: "", image: "/tools/pytorch.png", alt: "PyTorch" },
  { link: "", image: "/tools/snowflake.png", alt: "Snowflake" },
  { link: "", image: "/tools/figma.jpg", alt: "Figma" },
  { link: "", image: "/tools/eth.png", alt: "Ethereum" },
  { link: "", image: "/tools/sol.png", alt: "Solana" },
  { link: "", image: "/tools/apt.png", alt: "Aptos" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Max Aljadery</title>
      </Head>
      <Header />
      <main className="flex flex-col mt-14 justify-center items-center w-full">
        <div className="w-[95%] md:w-3/4 xl:w-1/2 flex flex-col">
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
                Mustafa Aljadery
              </h1>
              <p className="font-light text-gray-500">I like to build!</p>
            </div>
          </div>
          <div className="mt-12 flex flex-col">
            <p className="text-xl font-light text-gray-500">
              <span className="italic font-medium text-[#363636]">
                Software engineering
              </span>
              , <span className="italic font-medium text-[#363636]">ML</span>,{" "}
              <span className="italic font-medium text-[#363636]">design</span>,
              and{" "}
              <span className="italic font-medium text-[#363636]">finance</span>
              .
            </p>
            <p className="mt-8 text-xl text-gray-500 font-light">
              <span className="text-[#363636] font-semibold">
                Difficult scientific
              </span>{" "}
              and{" "}
              <span className="text-[#363636] font-semibold">
                engineering problems
              </span>{" "}
              are the <span className="text-[#363636] font-bold">ONLY</span>{" "}
              things I care about.
            </p>
            <p className="mt-6 text-xl text-gray-500 font-light">
              My interests are{" "}
              <span className="font-medium text-[#363636]">AI</span>,{" "}
              <span className="font-medium text-[#363636]">systems</span>, and{" "}
              <span className="font-medium text-[#363636]">finance</span>.
            </p>
          </div>
          <div className="flex flex-col mt-20">
            <p className="font-semibold text-[#363636] text-2xl">About Me</p>
            <ul className="mt-5 list-disc flex flex-col font-regular text-gray-600 space-y-3">
              <li className="text-lg ml-12">I&apos;m extremely competitive.</li>
              <li className="text-lg ml-12">I take work very seriously.</li>
              <li className="text-lg ml-12">Time is the denominator.</li>
              <li className="text-lg ml-12">
                &quot;Don&apos;t try to impress, just be impressive.&quot;
              </li>
            </ul>
          </div>
          {/*
          <div className="flex flex-col mt-20">
            <h2 className="font-bold text-[#363636] text-2xl">
              Highly Proficient At
            </h2>
            <div className="mt-6 flex flex-row flex-wrap">
              {tools.map((tool: any, index: number) => {
                return (
                  <div className="p-5" key={index}>
                    <img
                      className="h-[24px] md:h-[32px] rounded"
                      alt={tool.alt || ""}
                      src={tool.image}
                    />
                  </div>
                );
              })}
            </div>
            <p className="text-center text-sm font-regular mt-2 text-gray-400">
              + some more
            </p>
          </div>
            */}
        </div>
      </main>
      <Footer />
    </>
  );
}
