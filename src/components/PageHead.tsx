import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  title?: string;
  description?: string;
}

export default function PageHead(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: 'Max Aljadery - Personal Website',
    description:
      'My personal website. I write about software engineering, deep learning, finance, and startups.',
    image: '/max-meta.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta?.description} />
        <meta
          property="og:url"
          content={`https://maxaljadery.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://maxaljadery.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Max Aljadery" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@maxaljadery" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta
            property="article:published_time"
            content={meta.date}
          />
        )}
      </Head>
      <main className="w-full">{children}</main>
    </>
  );
}
