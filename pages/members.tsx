import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MembersGrid from '../components/MembersGrid';
import { Heading } from '@chakra-ui/react';

export default function MembersPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Selenium</title>
        <meta name="description" content="Website for Selenium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading >Selenium Members</Heading>
        <MembersGrid />
      </main>
    </div>
  );
}
  