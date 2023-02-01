import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initalProps = await Document.getInitialProps(ctx)

    return initalProps
  }

  render() {
    return (
      <Html>
        <Head />
        <body style={{margin: 0}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument