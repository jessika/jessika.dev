import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.blurb}>
        <h2>Hi, I'm Jessika Wu</h2>
        <p>
          I'm a software engineer with 7 years of professional experience, with
          a focus on full-stack and frontend development.
        </p>
        <div className={styles.icons}>
          <a href="https://github.com/jessika">
            <img src="/images/icons/brand-github.svg" alt="Github icon" />
          </a>
          <a href="https://linkedin.com/jessikawu1">
            <img src="/images/icons/brand-linkedin.svg" alt="LinkedIn icon" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
