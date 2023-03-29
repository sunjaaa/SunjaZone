import type { AppProps } from "next/app";
import { css, Global } from "@emotion/react";

import Layout from "@/Layout";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
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
