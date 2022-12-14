import { FC, PropsWithChildren } from 'react';
import Head from "next/head"

import { Navbar } from '../ui';

interface Props extends PropsWithChildren{
    title?: string;
}

//el window solo existe en el frontend, no en el backend
const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{ title || 'PokemonApp'}</title>
                <meta name="author" content="Joel" />
                <meta name="description" content={`Información sobre el pokemon ${ title }`} />
                <meta name="keywords" content={`${ title }, podemon, pokedex`} />

                <meta property="og:title" content={`Información sobre ${ title }`} />
                <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
                <meta property="og:image" content={`${ origin }/img/banner.png`} />
            </Head>

            <Navbar/>

            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>
        </>
    )
}
