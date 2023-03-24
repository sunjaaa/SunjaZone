import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Layout from "@/Layout/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout
      main={<Component {...pageProps} />}
      header={<Header />}
      footer={<Footer />}
    />
  );
}
