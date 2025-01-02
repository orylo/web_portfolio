import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Anton&family=Bebas+Neue&family=Black+Ops+One&family=Bungee+Inline&family=Bungee+Shade&family=Caveat:wght@700&family=Dancing+Script:wght@700&family=Faster+One&family=Homemade+Apple&family=Indie+Flower&family=Monoton&family=Oswald:wght@700&family=Permanent+Marker&family=Righteous&family=Rubik+Mono+One&family=Russo+One&family=Satisfy&family=Shadows+Into+Light&family=Teko:wght@700&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
