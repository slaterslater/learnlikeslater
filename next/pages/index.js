import Head from 'next/head'
import User, { useUser } from '../components/User'
import styles from '../styles/Home.module.css'
import BookGrid from '../components/BookGrid';
import Login from '../components/Login';
import client, { GET_BOOKS } from '../lib/apollo-client';

export const getServerSideProps = async () => {
  const { data } = await client.query({query: GET_BOOKS})
  return {
    props: {
      books: data.books
    }
  }
}



const HomePage = ({ books }) => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>LearnLikeSlater</title>
        <meta name="description" content="An interface for public library materials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>LearnLikeSlater</h1>
        <p className={styles.description}>books I'm trying to read</p>
        <div className={styles.grid}>
          <BookGrid books={books} />
          {<User />}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; slaterslater {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}


export default HomePage