import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
