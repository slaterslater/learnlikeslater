import Head from 'next/head'
import { gql } from '@apollo/client';
import styles from '../styles/Home.module.css'
import { client } from '../lib/client';

export default function Home({ books }) {

  const handleClick = async e => {
    const res = await fetch(`/api/book/${e.target.dataset.slug}`)
    const text = await res.text()
    console.log(text)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>LearnLikeSlater</title>
        <meta name="description" content="An interface for public library materials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          LearnLikeSlater
        </h1>

        <p className={styles.description}>
          books I'm trying to read
        </p>

        <div className={styles.grid}>
        {books.map(book => (
          <p key={book.id}>{book.name} <button type='button' data-slug={book.slug} onClick={handleClick}>GO</button></p>
        ))}  
        </div>

        

      </main>

      <footer className={styles.footer}>
        <p>&copy; slaterslater {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  
  const { data } = await client.query({
    query: gql`
      query {
        books {
          id
          name
          slug
        }
      }
    `
  });

  return {
    props: {
      books: data.books
    }
  }
}