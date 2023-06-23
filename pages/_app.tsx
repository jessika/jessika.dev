import "../styles/global.scss";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}
