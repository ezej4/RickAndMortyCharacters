import Head from "next/head";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const Checkout = ({}: {}) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title></title>
      </Head>
      <main>
        <h1>
          Hola
        </h1>
      </main>
    </div>
  );
};

export default Checkout;
