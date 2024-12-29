import { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import ConveyorBelt from '../components/ConveyorBelt';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      <Navigation />
      <ConveyorBelt />
    </div>
  );
};

export default Home;
