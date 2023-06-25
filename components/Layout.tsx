import Head from "next/head";
import styles from "./Layout.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import { ColorScheme, registerColorSchemeListener } from "../lib/color-schemes";

export const siteTitle = "jessika.dev";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    return registerColorSchemeListener((theme: ColorScheme) => {
      document.body.dataset.bsTheme = theme;
    });
  }, []);

  // TODO: Update Open Graph Meta tags to improve sharing experience
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal website of Jessika Wu" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link className={styles.headerItem} href="/">
            <span className={styles.logoJessika}>jessika</span>
            <span className={styles.logoDev}>.dev</span>
          </Link>
          <div>
            <Link className={styles.headerItem} href="/blog">
              Blog
            </Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
