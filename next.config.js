/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/lora",
        destination: "https://github.com/mustafaaljadery/lora-fine-tune",
        permanent: true,
      },
      {
        source: "/nn",
        destination: "https://github.com/mustafaaljadery/deep-nn-scratch",
        permanent: true,
      },
      {
        source: "/search",
        destination:
          "https://github.com/mustafaaljadery/paul-graham-essays-search",
        permanent: true,
      },
      {
        source: "/text-editor",
        destination:
          "https://github.com/mustafaaljadery/collaborative-texteditor",
        permanent: true,
      },
      {
        source: "/cybersyn",
        destination: "https://cybersyn.maxaljadery.com",
        permanent: true,
      },
      {
        source: "/blog-generate",
        destination: "https://github.com/mustafaaljadery/blog-generator",
        permanent: true,
      },
      {
        source: "/randomization",
        destination:
          "https://github.com/mustafaaljadery/Randomization-Interface-for-Experiment-Design",
        permanent: true,
      },
      {
        source: "/field",
        destination: "https://fieldtriprecords.vercel.app/",
        permanent: true,
      },
      {
        source: "/security-analysis",
        destination: "https://www.maxaljadery.com/research/security.pdf",
        permanent: true,
      },
      {
        source: "/network-design",
        destination: "https://www.maxaljadery.com/research/networks.pdf",
        permanent: true,
      },
      {
        source: "/parallel",
        destination: "https://www.maxaljadery.com/research/speed.pdf",
        permanent: true,
      },
      {
        source: "/calculus",
        destination: "https://mustafaaljadery.github.io/",
        permanent: true,
      },
      {
        source: "/bedrock",
        destination: "https://github.com/mustafaaljadery/anthropic-bedrock",
        permanent: true,
      },
      {
        source: "/wikipedia",
        destination: "https://github.com/mustafaaljadery/wikipedia-scraper",
        permanent: true,
      },
      {
        source: "/augment",
        destination: "https://augmentml.org/",
        permanent: true,
      },
      {
        source: "/llama",
        destination: "https://github.com/mustafaaljadery/lora-fine-tune",
        permanent: true,
      },
      {
        source: "/deep-nn",
        destination: "https://github.com/mustafaaljadery/deep-nn-scratch",
        permanent: true,
      },
      {
        source: "/embedding-search",
        destination:
          "https://github.com/mustafaaljadery/paul-graham-essays-search",
        permanent: true,
      },
      {
        source: "/data-visualization",
        destination: "https://github.com/mustafaaljadery/cybersyn",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
