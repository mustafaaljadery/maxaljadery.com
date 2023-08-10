import Link from 'next/link';

const links = [
  {
    name: 'GitHub',
    username: '@mustafaaljadery',
    link: 'https://github.com/mustafaaljadery',
  },
  {
    name: 'Twitter',
    username: '@maxaljadery',
    link: 'https://twitter.com/maxaljadery',
  },
  {
    name: 'LinkedIn',
    username: '@mustafaaljadery',
    link: 'https://www.linkedin.com/in/mustafaaljadery/',
  },
  {
    name: 'Email',
    username: 'aljadery@usc.edu',
    link: 'mailto:aljadery@usc.edu',
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center mt-16 md:mt-28 mb-12 md:mb-24">
      <div className="w-[95%] md:w-3/4 xl:w-1/2 flex flex-col space-y-3">
        {links.map((value: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-row w-full justify-between items-between"
            >
              <p className="text-lg font-light text-gray-500">
                {value?.name}
              </p>
              <a
                href={value?.link}
                target="_blank"
                rel="noreferrer noopener"
                className="my-auto underline text-gray-900 font-regular hover:opacity-80 underline-offset-2"
              >
                {value?.username}
              </a>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
