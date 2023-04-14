import Head from "next/head";
import Main from "./Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>SunjaZone</title>
        <meta
          name="description"
          content=".
생각없이 복종하며 졸음에 빠진 삶을 이어나가는 '코더'가 아닌,
자신의 코드와 조직을 지배하는 '개발자'가 목표인 FrontEnd Engineer 이선재의 웹사이트 입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
