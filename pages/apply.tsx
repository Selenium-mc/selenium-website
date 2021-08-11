import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { InputGroup, Input, InputLeftAddon } from '@chakra-ui/input';
import { LockIcon, AtSignIcon } from '@chakra-ui/icons';
import { Heading, Link, Stack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/react';

export default function LoginPage() {
    return (
        <div className={styles.container}>
          <Head>
            <title>Selenium</title>
            <meta name="description" content="Website for Selenium" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <Navbar />

            <Heading>We are sorry, but we are not accepting applications at this time :(</Heading>
          </main>
        </div>
    );
}