import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';

const works = [
  {
    name: 'NPM Library AptosJS',
    snippet: 'NodeJS library to interact with the Aptos Blockchain.',
    description:
      'Created a NodeJS library that provides react webhooks to interact with the Aptos blockchain. I created this because I want to remove all complexity when interacting with blockchains. I believe the only reason they are not widely adopted is because of the barrier to entry in the form of complexity.',
    link: 'https://aptosjs.com/',
    github: 'https://github.com/mustafaaljadery/aptosjs',
    image: '',
    tools: [
      { image: '/tools/nodejs.png', alt: 'NodeJS Image' },
      { image: '/tools/apt.png', alt: 'Aptos Logo' },
    ],
  },
  {
    name: 'CambrianML',
    snippet: 'Web app to interact with arXiv better.',
    description:
      'Cambrian is a web appilcation that allows you to get the most out of any arXiv paper. It allows to chat with papers, search papers, send them to friends, and share your papers publically.',
    link: 'https://cambrianml.org/',
    github: '',
    image: '',
    tools: [
      { image: '/tools/nextjs.png', alt: 'NextJS Logo' },
      { image: '/tools/pinecone.png', alt: 'Pinecone Logo' },
      { image: '/tools/redis.svg', alt: 'Redis Logo' },
      { image: '/tools/langchain.png', alt: 'LangChain Logo' },
    ],
  },
  {
    name: 'Fine-tuning LLaMA with LoRA',
    snippet: 'I fine-tuned LLaMA with LoRA on a sentiment task.',
    description:
      'I took the contents of a huggingface Twitter sentiment dataset and fine-tuned LLaMA with LoRA on it. I use LoRA to fine-tune the model for training efficiency.',
    link: '',
    github: 'https://github.com/mustafaaljadery/lora-fine-tune',
    image: '',
    tools: [
      { image: '/tools/pytorch.png', alt: 'PyTorch Logo' },
      { image: '/tools/python.png', alt: 'Python Logo' },
      { image: '/tools/huggingface.png', alt: 'Huggingface Logo' },
    ],
  },
  {
    name: 'Deep NN in NumPy',
    snippet: 'I train a deep neural network in NumPy.',
    description:
      'Training a neural network using PyTorch is easy, all of the primatives are given to you, but what if you had to implement it from scratch? I did just that, I implemented a deep neural network in NumPy.',
    link: '',
    github: 'https://github.com/mustafaaljadery/deep-nn-scratch',
    image: '',
    tools: [{ image: '/tools/python.png', alt: 'Python Logo' }],
  },
  {
    name: 'Open-Source Chat UI',
    snippet: 'I created the ChatGPT UI and made it open-source.',
    description:
      'I thought it was cool if I made the ChatGPT UI open-source. Moreover, it would give me more experience with streaming words as they come from the OpenAI api, and optimization in storing/sharing chats.',
    link: 'https://chat.maxaljadery.com',
    github: 'https://github.com/mustafaaljadery/chat-ui',
    image: '',
    tools: [
      { image: '/tools/nodejs.png', alt: 'NodeJS Logo' },
      { image: '/tools/nextjs.png', alt: 'NextJS Logo' },
      { image: '/tools/postgres.png', alt: 'Postgres Logo' },
    ],
  },
  {
    name: 'Essay Embedding Search',
    snippet: 'Search through Paul Graham Essays using embeddings.',
    description:
      'I created a python script that allows you to search for any phrase in Paul Graham Essays. It uses embeddings to find the most similar essay to your query. I use ChromaDB as the embeddings database.',
    link: '',
    github:
      'https://github.com/mustafaaljadery/paul-graham-essays-search',
    image: '',
    tools: [
      { image: '/tools/python.png', alt: 'Python Logo' },
      { image: '/tools/langchain.png', alt: 'LangChain Logo' },
      { image: '/tools/chroma.png', alt: 'Chroma Logo' },
    ],
  },
  {
    name: 'Collaborative Text Editor',
    snippet: 'Work with other people in a single text editor.',
    description:
      'I created a collaborative text editor using NextJS and SocketIO. It allows you to work with other people in a single text editor. I built this to further my understanding of sockets in a real-time application. Worked a many optimizations as well.',
    link: '',
    github:
      'https://github.com/mustafaaljadery/collaborative-texteditor',
    image: '',
    tools: [
      { image: '/tools/nodejs.png', alt: 'NodeJS Logo' },
      { image: '/tools/nextjs.png', alt: 'NextJS Logo' },
      { image: '/tools/redis.svg', alt: 'Redis Logo' },
      { image: '/tools/socketio.png', alt: 'SocketIO Logo' },
    ],
  },
  {
    name: 'Cybersyn Data Visualization',
    snippet: 'I created a BI tool for data visualization.',
    description:
      'I built this BI tool to show the power of the Snowflake Data Marketplace. It allows to go grab any dataset and manipulate it such that you can built your own app on top of it. It is similar to the AppStore but for data. Also Cybersyn is really cool.',
    link: 'https://cybersyn.maxaljadery.com',
    github: 'https://github.com/mustafaaljadery/cybersyn',
    image: '',
    tools: [
      { image: '/tools/nodejs.png', alt: 'NodeJS Logo' },
      { image: '/tools/snowflake.png', alt: 'Snowflake Logo' },
      { image: '/tools/nextjs.png', alt: 'NextJS Logo' },
    ],
  },
  {
    name: 'AI Blog Generator',
    snippet: 'Web application to generate SEO blog articles',
    description:
      'I created this because I wanted to see if LLM can create SEO optimized blog articles. The theory behind is this if someone is starting a new startup, they can rank for keywords with low KD on google and basically get really cheap traffic.',
    link: 'https://blog.maxaljadery.com',
    github: 'https://github.com/mustafaaljadery/blog-generator',
    image: '',
    tools: [
      { image: '/tools/nextjs.png', alt: 'NextJS Image' },
      { image: '/tools/nodejs.png', alt: 'NodeJS Image' },
    ],
  },
  {
    name: 'Reverse Video Playback',
    snippet: 'Render a video in reverse.',
    description:
      'I created this web application to render a video in reverse. I used FFMPEG & NextJS to do this. Moreover, this is done in serverless functions on Vercel.',
    link: '',
    github: 'https://github.com/mustafaaljadery/reverse-video',
    image: '',
    tools: [
      { image: '/tools/nodejs.png', alt: 'NodeJS Logo' },
      { image: '/tools/nextjs.png', alt: 'NextJS Logo' },
      { image: '/tools/ffmpeg.png', alt: 'FFMpeg Logo' },
    ],
  },
  {
    name: 'Notion to Blog',
    snippet: 'Notion as a CMS',
    description:
      'I wanted to see if I can use Notion as a CMS. This way all changes to a potential blog for a web application would update in minutes on the site.',
    link: '',
    github: 'https://github.com/mustafaaljadery/notion-to-blog',
    image: '',
    tools: [{ image: '/tools/nodejs.png', alt: 'NodeJS Image' }],
  },
  {
    name: 'Field Trip Records Front-End',
    snippet: 'Front-end site for FTR record label.',
    description:
      'I created the front-end site for FTR record label. I created it using NextJS and Framer Motion. I also used TailwindCSS for styling. I used Vercel for hosting.',
    link: 'https://fieldtriprecords.vercel.app',
    github:
      'https://github.com/mustafaaljadery/Field-Trip-Records-Website',
    image: '',
    tools: [
      { image: '/tools/nodejs.png', alt: 'NodeJS Logo' },
      { image: '/tools/nextjs.png', alt: 'NextJS Logo' },
      { image: '/tools/framer.svg', alt: 'Framer Logo' },
      { image: '/tools/tailwind.png', alt: 'Tailwind Logo' },
    ],
  },
  {
    name: 'Randomization Experiment Interface',
    snippet: 'Control trial randomization',
    description:
      'A script to perform randomization for experiments. It randomly assigns different testing groups and calculates regression p-values as interface.',
    link: '',
    github:
      'https://github.com/mustafaaljadery/Randomization-Interface-for-Experiment-Design',
    image: '',
    tools: [{ image: '/tools/python.png', alt: 'Python Logo' }],
  },
];

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - Max Aljadery</title>
      </Head>
      <Header />
      <main className="flex flex-col w-full justify-center items-center">
        <div className="w-[95%] md:w-3/4 xl:w-1/2 flex flex-col">
          <div className="flex flex-col mt-16">
            <h1 className="text-3xl font-bold text-[#363636]">
              Open Source
            </h1>
            <p className="mt-6 text-lg font-light text-gray-700">
              I build stuff because it makes me better and it&apos;s
              really fun.
            </p>
            <p className="mt-4 text-lg font-light text-gray-700">
              I tend to build things that are useful for me, and
              hopefully they will be useful for others.
            </p>
            <p className="mt-4 text-lg font-light text-gray-700">
              If you find something interesting, or want to build
              something together,{' '}
              <a
                href="mailto:aljadery@usc.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium underline underline-offset-2 hover:opacity-90"
              >
                Email Me
              </a>
              .
            </p>
          </div>
          <div className="mt-20 flex flex-col space-y-8 w-full">
            {works.map((work: any, index: number) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col space-y-8"
                >
                  <div className="flex w-full flex-row space-x-8">
                    <div className="flex flex-col w-full md:w-4/5">
                      <h2 className="text-xl font-bold text-[#363636]">
                        {work?.name}
                      </h2>
                      <div className="mt-2 flex flex-row">
                        {work?.tools.map(
                          (tool: any, index: number) => {
                            return (
                              <div
                                className="py-0.5 px-3"
                                key={index}
                              >
                                <img
                                  alt={tool.alt}
                                  className="h-[16px] rounded"
                                  src={tool.image}
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                      <p className="mt-4 font-light text-gray-500">
                        {work?.snippet}
                      </p>
                      <p className="mt-4 font-regular text-gray-500">
                        {work?.description}
                      </p>
                      <div className="flex mt-6 flex-row space-x-2">
                        <p className="font-semibold text-[#363636]">
                          Links:
                        </p>
                        {work?.github && (
                          <a
                            href={work?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 font-semibold text-gray-700 underline"
                          >
                            GitHub
                          </a>
                        )}
                        {work?.link && (
                          <a
                            href={work?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 font-semibold text-gray-700 underline"
                          >
                            Website
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <hr className="w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}