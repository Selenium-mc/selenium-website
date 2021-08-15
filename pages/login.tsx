import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { InputGroup, Input, InputLeftAddon } from '@chakra-ui/input';
import { LockIcon, AtSignIcon } from '@chakra-ui/icons';
import { Heading, Link, Stack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client';


export default function LoginPage() {
  const [session, loading] = useSession()

  return (
    <div className={styles.container}>
      <Head>
        <title>Selenium</title>
        <meta name="description" content="Website for Selenium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />

        <Heading>Login</Heading>

        {
          !session ?
            <Stack>
              <InputGroup id="uname">
                <InputLeftAddon><AtSignIcon /></InputLeftAddon>
                <Input placeholder="Username" />
              </InputGroup>
              <InputGroup id="pass">
                <InputLeftAddon><LockIcon /></InputLeftAddon>
                <Input placeholder="Password" type="password" />
              </InputGroup>
              <Button onClick={login}>Login</Button>
            </Stack>
            : <h1>You are logged in already you dummy</h1>
        }
      </main>
    </div>

  );

  function login() {

  }
}