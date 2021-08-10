import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Text, Heading, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Selenium</title>
        <meta name="description" content="Website for Selenium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading >Welcome to Selenium!</Heading>
        <Text>We are a group of people who enjoy to program, play games, and have fun together!</Text>
      </main>
    </div>
  )
}
