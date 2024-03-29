import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../styles/pages/Login'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>OverSee</h1>
        <input className="login" placeholder="Login" />
        <Link href="/test">
          <a>Test</a>
        </Link>
      </main>
    </Container>
  )
}

export default Home
