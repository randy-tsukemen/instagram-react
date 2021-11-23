import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram 2.0 Youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <h1>This is the INSTAGRAM 2.0 BUILD</h1>
    </div>
  );
}
