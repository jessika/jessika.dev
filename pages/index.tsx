import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.blurb}>
        <p>
          Hi! I'm Jessika, a software engineer with a focus on full-stack and
          frontend development.
        </p>
        <div className={styles.icons}>
          <a href="https://github.com/jessika">
            <img src="/images/icons/brand-github.svg" alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/jessikawu1">
            <img src="/images/icons/brand-linkedin.svg" alt="LinkedIn icon" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
