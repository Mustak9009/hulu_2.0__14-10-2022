import React from 'react';
import Head from 'next/head';
import Header from '../Components/Header';
export default function index() {
  return (
    <>
    <Head>
      <title>Hulu 2.0</title>
    </Head>
    <div className='text-4xl text-center'>Lets build Hulu2.0</div>
    {/* Header */}
    <Header/>
    {/* NavBar */}
    {/* Result */}
    </>
  )
}
