import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import dynamic from "next/dynamic";
import SomeComponent from "../components/SomeComponent";
const SomeComponentDynamic = dynamic(()=>import("../components/SomeComponent"));

export default function Home() {

  const [renderSomeComponent, setRenderSomeComponent] = useState(false);

  const onClickHandler = () => {
    setRenderSomeComponent(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title> Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={onClickHandler}>Render Some Component</button>
      <main className={styles.main}>
        {renderSomeComponent && <SomeComponent />}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}