import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ô grain de sel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue <em>ô grain de sel</em>
        </h1>

        <p className={styles.description}>
          Quelques mets !
        </p>

        <ul className={styles.grid}>
          {products.map(({ name, img, description }) => (
            <li className={styles.card} key={name}>
              <img src={img} alt={name} />
              <h3>{name}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
