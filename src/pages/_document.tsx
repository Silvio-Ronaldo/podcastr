import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
    
        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            });
    
          const initialProps = await Document.getInitialProps(ctx);
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          };
        } finally {
          sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Ouça podcasts de uma forma simples." />
                    <meta name='application-name' content='Podcastr' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='Podcastr' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-TileColor' content='#8257E5' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content='#8257E5' />
                    
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />

                    <meta name='twitter:card' content='summary' />
                    <meta name='twitter:url' content='https://podcastr-silvio-ronaldo.vercel.app' />
                    <meta name='twitter:title' content='Podcastr' />
                    <meta name='twitter:description' content='Ouça podcasts a qualquer hora e em qualquer lugar' />
                    <meta name='twitter:image' content='https://podcastr-silvio-ronaldo.vercel.app/public/favicon.png' />
                    <meta name='twitter:creator' content='@Sivirinoo' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='Podcastr' />
                    <meta property='og:description' content='Ouça podcasts a qualquer hora e em qualquer lugar' />
                    <meta property='og:site_name' content='Podcastr' />
                    <meta property='og:url' content='https://podcastr-silvio-ronaldo.vercel.app' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}