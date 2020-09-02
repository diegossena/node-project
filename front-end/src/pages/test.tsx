import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../styles/pages/Login'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Test</title>
      </Head>
      <main>
        <h1>Hello World</h1>
        <Link href="/">
          <a>Back</a>
        </Link>
      </main>
    </Container>
  )
}

export default Home
