import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>COFFEETHON</title>
      <meta name="description" content="COFFEETHON" />
      <link rel="icon" href="/favicon.ico" />
      {/* <link href="https://fonts.cdnfonts.com/css/dubai" rel="stylesheet" /> */}
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
