import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class Mydocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap"
            rel="stylesheet"
          />

          <meta name="application-name" content="Podcastr" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Podcastr" />
          <meta name="description" content="Podcastr para programadores" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="theme-color" content="#000000" />

          <link rel="manifest" href="/manifest.json" />

          <link
            href="/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>

          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
