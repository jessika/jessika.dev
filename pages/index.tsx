import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { ColorScheme, registerColorSchemeListener } from "../lib/color-schemes";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function Home() {
  const [githubIcon, setGithubIcon] = useState("");
  const [linkedinIcon, setLinkedinIcon] = useState("");
  useEffect(() => {
    return registerColorSchemeListener((newColorScheme: ColorScheme) => {
      if (newColorScheme === ColorScheme.Dark) {
        setGithubIcon("/images/icons/brand-github-theme-dark.svg");
        setLinkedinIcon("/images/icons/brand-linkedin-theme-dark.svg");
      } else {
        setGithubIcon("/images/icons/brand-github-theme-light.svg");
        setLinkedinIcon("/images/icons/brand-linkedin-theme-light.svg");
      }
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.blurb}>
        <h1>Hi, I'm Jessika!</h1>
        <p>
          I'm a software engineer with a focus on full-stack and frontend
          development.
        </p>
        <div className={styles.icons}>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 500, hide: 0 }}
            overlay={<Tooltip>GitHub</Tooltip>}
          >
            <a href="https://github.com/jessika">
              <img src={githubIcon} alt="Github icon" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 500, hide: 0 }}
            overlay={<Tooltip>LinkedIn</Tooltip>}
          >
            <a href="https://linkedin.com/in/jessikawu1">
              <img src={linkedinIcon} alt="LinkedIn icon" />
            </a>
          </OverlayTrigger>
        </div>
      </section>
    </Layout>
  );
}
