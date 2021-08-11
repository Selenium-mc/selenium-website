import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Text, Heading, Button } from '@chakra-ui/react';
import ReactTypingEffect from 'react-typing-effect';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Selenium</title>
        <meta name="description" content="Website for Selenium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading >Welcome to <span className={styles.linearWipe} >Selenium!</span></Heading>
        <Text fontSize="2xl">We are group of friends who:</Text>
        {/* <Text>We are a group of people who enjoy to program, play games, and have fun together!</Text> */}
        <ReactTypingEffect
          className={styles.smasherKeyboard}
          text={["Chill out together", "Make open source software", "Play games"]}
          /*
          cursorRenderer={(cursor: any) => <h1 className={styles.smasherKeyboard}>{cursor}</h1>}
          displayTextRenderer={(text: string, i: any) => {
            return (
              <h1>
                {text.split('').map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      className={styles.smasherKeyboard}
                      key={key}
                    >{char}</span>
                  );
                })}
              </h1>
            );
          }}
          */
          eraseDelay={1000}
          typingDelay={1500}

        />
      </main>
    </div>
  )
}
