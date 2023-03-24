import Head from "next/head";
import Main from "./Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>SunjaZone</title>
        <meta name="description" content="sunjaaa의 웹페이지 입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
