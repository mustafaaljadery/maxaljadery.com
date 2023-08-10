/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/lora',
        destination:
          'https://github.com/mustafaaljadery/lora-fine-tune',
        permanent: true,
      },
      {
        source: '/nn',
        destination:
          'https://github.com/mustafaaljadery/deep-nn-scratch',
        permanent: true,
      },
      {
        source: '/search',
        destination:
          'https://github.com/mustafaaljadery/paul-graham-essays-search',
        permanent: true,
      },
      {
        source: '/text-editor',
        destination:
          'https://github.com/mustafaaljadery/collaborative-texteditor',
        permanent: true,
      },
      {
        source: '/cybersyn',
        destination: 'https://cybersyn.maxaljadery.com',
        permanent: true,
      },
      {
        source: '/blog-generate',
        destination:
          'https://github.com/mustafaaljadery/blog-generator',
        permanent: true,
      },
      {
        source: '/randomization',
        destination:
          'https://github.com/mustafaaljadery/Randomization-Interface-for-Experiment-Design',
        permanent: true,
      },
      {
        source: '/field',
        destination: 'https://fieldtriprecords.vercel.app/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
