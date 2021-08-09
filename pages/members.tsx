import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import MembersGrid from '../components/MembersGrid';
import { Text, Heading, Button } from '@chakra-ui/react';

export default function MembersPage() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Selenium</title>
          <meta name="description" content="Website for Selenium" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <Navbar />
          <Heading >Selenium Members</Heading>
          <MembersGrid />
        </main>
      </div>
    )
  }
  