import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I am Gin Hanner Tayag, 20 years old. I love driving and playing online games. My favorite song is Suffering by Jorge Rivera-Herrans, Anna Lea, and my favorite food is Pork Sinigang.In 5 years, I see myself living a peaceful and happy life working as a valued Data Analyst in a great company culture while having the time and freedom to pursue my personal passions
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
