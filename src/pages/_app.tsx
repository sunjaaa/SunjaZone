import type { AppProps } from "next/app";
import { css, Global } from "@emotion/react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Layout from "@/Layout/Layout";
import { content } from "@/constants";

const selectionStyle = css`
  ::selection {
    background-color: ${content.primary.common};
  }
`;

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Global styles={selectionStyle} />
    <Layout
      main={<Component {...pageProps} />}
      header={<Header />}
      footer={<Footer />}
    />
  </>
);

export default App;
