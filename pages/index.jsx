import React from "react";
import Head from "next/head";
import { Header, NavBar, Result } from "../components";
import Request from "../utils/requests";
export default function index({ results }) {
  return (
    <div>
      <Head>
          <title>Hulu2.0</title>
      </Head>
      <Header />
      <NavBar />
      <Result results={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const res = await fetch(`https://api.themoviedb.org/3${Request[genre]?.url || Request.fetchTrending.url}`).then((res) => res.json()); //Dynamic data fetch using -> Request[genre]?.url
  return {
    props: {
      results: res.results,
    },
  };
}
