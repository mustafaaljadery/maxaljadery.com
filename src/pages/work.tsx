import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';

const works = [
  {
    name: '',
    description: '',
    image: '',
    tools: ['', ''],
  },
  {
    name: '',
    description: '',
    image: '',
    tools: ['', ''],
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

const papers = [{}, {}];

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - Max Aljadery</title>
      </Head>
      <Header />
      <main className="flex flex-col"></main>
      <Footer />
    </>
  );
}
