import Document, { Html, Head, Main, NextScript } from "next/document";




class MyDocument extends Document {
  static async getServerSideProps(ctx) {
    const initialProps = await Document.getServerSideProps(ctx); 
    return { ...initialProps};
  }

  render() { 
    return (
      <Html lang={"en"}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;