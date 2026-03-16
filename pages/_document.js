import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="DIAK-SERVICE - Votre spécialiste en matériel informatique et fournitures de bureau à Bamako, Mali. Ordinateurs, imprimantes, accessoires à prix compétitifs." />
        <meta name="keywords" content="informatique bamako, ordinateur bamako, imprimante bamako, fournitures bureau mali, DIAK-SERVICE, matériel informatique mali" />
        <meta name="author" content="DIAK-SERVICE" />
        <meta property="og:title" content="DIAK-SERVICE | Matériel Informatique & Fournitures de Bureau à Bamako" />
        <meta property="og:description" content="Votre spécialiste en matériel informatique et fournitures de bureau à Bamako, Mali." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
