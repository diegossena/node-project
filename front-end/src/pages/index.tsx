import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Login'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>Hello World</h1>
      </main>
    </Container>
  )
}

export default Home
