import Head from "next/head";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const designs = [
  {
    name: "Data Visualization",
    description: "Redesign of Datadog",
    image: "",
    link: "/design/datadog",
  },
];

interface CardProps {
  value: any;
}

function Card({ value }: CardProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="p-3 w-full md:w-1/3"
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <a
        href={value.link}
        className="p-6 w-full bg-[#F4F3F1] rounded hover:opacity-90 flex flex-col"
      >
        <div className="py-16"></div>
        <div className="flex flex-row justify-between items-between w-full">
          <p className="text-sm font-regular text-[#AAAAAA]">{value.name}</p>
          <span className="text-sm font-regular text-[#DDDCDB]">
            {value.description}
          </span>
        </div>
      </a>
    </div>
  );
}

export default function Design() {
  return (
    <>
      <Head>
        <title>Design - Mustafa Aljadery</title>
      </Head>
      <Header />
      <main className="flex flex-col mt-16 justify-center items-center w-full">
        <div className="flex flex-col justify-start items-start w-[95%] md:w-3/4 xl:w-1/2">
          <h1 className="text-3xl font-semibold text-[#363636]">Design Work</h1>
          <p className="mt-4 font-regular text-gray-500">
            Imagining a world of beautifully designed products.
          </p>
        </div>
        <div className="w-[95%] mt-16 flex flex-row flex-wrap">
          {designs.map((value, index: number) => {
            return <Card key={index} value={value} />;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
