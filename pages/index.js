import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  return (
    <div
      className="bg-gray-50 h-screen
      overflow-y-scroll scrollbar-hide"
    >
      <Head>
        <title>Instagram 2.0 Youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />

      <h1>This is the INSTAGRAM 2.0 BUILD</h1>
    </div>
  );
}
