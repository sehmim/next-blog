// index.tsx
import { FC } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Sehmim Haque</h1>

                <p className={styles.description}>Blog Assessment</p>

                <div className={styles.grid}>
                    <Link href={'/post'}>
                        <a>
                            <h3>Checkout some Posts</h3>
                        </a>
                    </Link>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="https://www.linkedin.com/in/sehmim-haque/" target="_blank" rel="noopener noreferrer">
                    {' '}
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                        alt="Vercel Logo"
                        className={styles.logo}
                    />
                </a>
                <a href="https://github.com/sehmim" target="_blank" rel="noopener noreferrer">
                    {' '}
                    <img src="http://cdn.onlinewebfonts.com/svg/img_326384.png" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    );
};

export default Home;
