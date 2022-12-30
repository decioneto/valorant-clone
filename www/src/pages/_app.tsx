import { Navigation } from '@components/major/Navigation';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>
                    VALORANT: o jogo competitivo de tiro tático 5x5 da Riot
                    Games
                </title>
            </Head>

            <main>
                <Navigation />
                <Component {...pageProps} />
            </main>
        </>
    );
}
