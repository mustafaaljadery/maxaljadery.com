import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMdxComponentsContext } from "../../context/mdxContext";
import { IPost } from "../../interfaces/post";
import { getPost, getAllPosts } from "../../../lib/mdxUtils";
import { ParsedUrlQuery } from "querystring";
import GistEmbed from "@/components/GistEmbed";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
};

// components to render
const components = {
  GistEmbed,
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  return (
    <div>
      <Head>
        <meta property="og:title" content={frontMatter.title} key="ogtitle" />
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
        <article className="w-[95%] mt-10 md:w-3/4 xl:w-1/2 flex flex-col justify-start items-start">
          <div className="">
            <h1 className="text-3xl font-bold text-[#363636]">
              {frontMatter.title}
            </h1>
            <p className="mt-5 text-base text-gray-500">
              {frontMatter.description}
            </p>
            <></>
          </div>

          <MDXRemote components={components} {...source} />
        </article>
      </div>
      <Footer />
    </div>
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
