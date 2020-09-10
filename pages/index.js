import Link from 'next/link';
import Head from 'next/head';

export default function Index() {
  return <>
    <Head>
      <title>Next app</title>
      <meta name="keywords" content="next, js, react" />
      <meta name="description" content="my first next app" />
    </Head>
    <h1>Hellow Next.js</h1>
    <p>
      <Link href={'/about'}><a>About</a></Link>
    </p>
    <p>
      <Link href={'/posts'}><a >Posts</a></Link>
    </p>
  </>
}
