import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/footer.css';
import '../styles/discover.css';
import '../styles/category.css';
import '../styles/movies.css';
import '../styles/trending.css';
import '../styles/detail_movie.css';
import '../styles/movie_item.css';
import '../styles/not_found.css';
import Head from 'next/head';
import { Router } from 'next/router';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

function MyApp({ Component, pageProps }: AppProps) {
  NProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
    <>
      <Head>
        <title>WhatMovie | Looking for information about your favorite movie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Looking for information about your favorite movie" />
        <meta name="og:title" content="WhatMovie | Looking for information about your favorite movie" />
        <meta name="og:url" content="https://jarh-whatmovie.vercel.app" />
        <meta name="og:image" content="https://cdn-icons-png.flaticon.com/512/1038/1038100.png" />
        <meta name="og:description" content="Looking for information about your favorite movie" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* <!-- Bootstrap CSS --> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />

        {/* <!-- Bootstrap JS --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />

        {/* <!-- Google Fonts --> */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* <!-- Fontawesome --> */}
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />

      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
