import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

export const siteTitle = "jessika.dev";

export default function Layout({ children }: { children: React.ReactNode }) {
  // TODO: Update Open Graph Meta tags to improve sharing experience
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Jessika's personal website" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <nav>
          <Link className={styles.headerItem} href="/">
            Home
          </Link>
          <Link className={styles.headerItem} href="/blog">
            Blog
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
