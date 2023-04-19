import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { css, Global } from "@emotion/react";
import "../styles/global.css";

import { RecoilRoot } from "recoil";

import Layout from "@/Layout";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
import { content } from "@/constants";
import ModalProvider from "@/components/ModalProvider";

const selectionStyle = css`
  ::selection {
    background-color: ${content.primary.common};
  }
`;

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <RecoilRoot>
      <SessionProvider session={pageProps.session}>
        <Global styles={selectionStyle} />
        <ModalProvider>
          <Layout
            main={<Component {...pageProps} />}
            header={<Header />}
            footer={<Footer />}
          />
        </ModalProvider>
      </SessionProvider>
    </RecoilRoot>
  </>
);

export default App;
