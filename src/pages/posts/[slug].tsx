import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { IPost } from "../../interfaces/post";
import { getPost, getAllPosts } from "../../../lib/mdxUtils";
import { ParsedUrlQuery } from "querystring";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
};

// components to render
const components = {
  h1: (props: any) => <h1 className="">{props.children}</h1>,
  h2: (props: any) => (
    <h2 className="text-3xl mt-12 font-semibold text-[#363636]">
      {props.children}
    </h2>
  ),
  h3: (props: any) => <h3 className="">{props.children}</h3>,
  p: (props: any) => (
    <p className="mt-6 text-base font-regular text-gray-500">
      {props.children}
    </p>
  ),
  ol: (props: any) => <ol className="list-decimal ml-8">{props.children}</ol>,
  li: (props: any) => (
    <li className="mt-2 text-base font-regular text-gray-500">
      {props.children}
    </li>
  ),
  a: (props: any) => (
    <a
      href={props.href}
      target="_blank"
      rel="noopenner noreferrer"
      className="text-blue-700 hover:opacity-90"
    >
      {props.children}
    </a>
  ),
  ul: (props: any) => <ul className="list-disc ml-8">{props.children}</ul>,
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta
          property="og:description"
          content={frontMatter.description}
          key="ogtitle"
        />
        <meta property="og:image" content={frontMatter.thumbnail} key="ogimg" />
        <meta property="og:type" content="article" />
      </Head>
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        <article className="w-[95%] mt-12 md:w-3/4 xl:w-1/2 flex flex-col justify-start items-start">
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-4xl font-bold text-[#363636]">
              {frontMatter.title}
            </h1>
            <p className="mt-5 text-lg text-gray-500">
              {frontMatter.description}
            </p>
            <></>
          </div>
          <div className="flex flex-col mt-8">
            <MDXRemote components={components} {...source} />
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default PostPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams;
  // get the slug
  const { content, data } = getPost(slug);
  // serialize the data on the server side
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  //only get the slug from posts
  const posts = getAllPosts(["slug"]);

  // map through to return post paths
  const paths = posts.map((post: any) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
