import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>InaccessibleRx</header>
      <main className={styles.main}>
        <h1>Store</h1>
        <button>Buy Me</button>
        <h2>Code Build Test Change!</h2>
      </main>
      <footer>Footer</footer>
    </>
  )
}
