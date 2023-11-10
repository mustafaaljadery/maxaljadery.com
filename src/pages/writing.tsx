import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";

const academic_work = [
  {
    name: "Design of Computer Networks",
    description:
      "A complete textbook on the design of computer networks. I discuss everything from network architecture to large scaling issues like concurrency and congrestion.",
    link: "/research/networks.pdf",
  },
  {
    name: "The Path Forward: A Primer for Reinforcement Learning",
    description:
      "A complete textbook on reinforcement learning with topics starting from decision trees to deep reinforcement learning.",
    link: "/research/rl.pdf",
  },
  {
    name: "Single-Variable & Multi-Variable Calculus Textbooks",
    description:
      "Authored three textbooks teaching single variable integral and differential calculus, and multi-variable calculus.",
    link: "https://mustafaaljadery.github.io/",
  },
  {
    name: "Parallel Execution of Smart Contracts on Blockchains Without Compromise of Security and Decentralization",
    description:
      "Proposal of an optimization technique on the execution layer of smart contracts. I propose a concurrent approach to the processing of smart contracts. Speeds up to 3x current EVM compatible execution.",
    link: "/research/speed.pdf",
  },
  {
    name: "Compiled Analysis on Blockchain Security",
    description:
      "Identified security challenges in both the infrastructure and smart contract layers of a blockchain. Proposed solutions and avoidance mechanisms.",
    link: "/research/security.pdf",
  },
];

const methods = [
  {
    name: "Decomposing Monosemanticity using Dictionary Learning Visualized",
    description:
      "A visualized explanation of the paper Towards Monosemanticity: Decomposing Language Models With Dictionary Learning.",
    link: "/posts/decomposing-monosemanticity",
  },
  {
    name: "Inner vs Outer Model Alignment",
    description:
      "A discussion of exisistential AI risks from the point of view of inner vs outer alignment.",
    link: "/posts/inner-vs-outer-alignment",
  },
  {
    name: "Concurrently Scraping & Tokenizing Wikipedia using GoLang",
    description:
      "A design doc on building a Wikipedia scraper with concurrency and tokenizer with OpenAI's tiktoken in GoLang.",
    link: "/posts/scrape-wikipedia",
  },
];

interface WritingComponentProps {
  value: any;
}

function WritingComponent({ value }: WritingComponentProps) {
  return (
    <Link href={value?.link}>
      <button className="flex flex-row p-2 hover:bg-gray-50 justify-between items-between w-full space-x-4">
        <div className="flex flex-col flex-1 justify-start items-start my-auto space-y-1">
          <p className="font-medium text-lg text-[#363636] text-start">
            {value?.name}
          </p>
          <span className="italic font-light text-gray-500 text-base text-start">
            {value?.description}
          </span>
        </div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="my-auto"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="#363636"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </Link>
  );
}

export default function Writing() {
  return (
    <>
      <Head>
        <title>Writing - Mustafa Aljadery</title>
      </Head>
      <Header />
      <main className="flex flex-col w-full justify-center items-center">
        <div className="w-[95%] md:w-3/4 xl:w-1/2 flex flex-col mt-16">
          <div className="w-full flex flex-col">
            <h2 className="text-3xl font-semibold text-[#363636]">
              Academic Work
            </h2>
            <div className="flex flex-col space-y-6 mt-8 w-full">
              {academic_work.map((research: any, index: number) => {
                return <WritingComponent value={research} key={index} />;
              })}
            </div>
          </div>
          <div className="mt-20 flex flex-col w-full">
            <h2 className="text-2xl font-bold text-[#363636]">
              Tutorials and Models
            </h2>
            <div className="flex flex-col space-y-6 mt-8 w-full">
              {methods.map((method: any, index: number) => {
                return <WritingComponent value={method} key={index} />;
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
