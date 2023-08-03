import Layout from "../../components/Layout";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote } from "next-mdx-remote";
import styles from "./id.module.scss";
import Giscus from "@giscus/react";
import {
  getColorScheme,
  registerColorSchemeListener,
} from "../../lib/color-schemes";
import { useEffect, useState } from "react";

export default function Post({ postData }: { postData: PostData }) {
  const [colorScheme, setColorScheme] = useState(getColorScheme());
  useEffect(() => {
    return registerColorSchemeListener((newColorScheme) => {
      setColorScheme(newColorScheme);
    });
  }, []);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.article}>
        <h1>{postData.title}</h1>
        <div className={styles.date}>
          <Date dateString={postData.date} />
        </div>
        <main className={styles.main}>
          <MDXRemote {...postData.mdxSource} />
        </main>
      </article>
      <Giscus
        repo="jessika/jessika.dev"
        repoId="R_kgDOJwIOuA"
        category="Announcements"
        categoryId="DIC_kwDOJwIOuM4CXTio"
        mapping="pathname"
        strict="1"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorScheme}
        lang="en"
        loading="lazy"
      />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
