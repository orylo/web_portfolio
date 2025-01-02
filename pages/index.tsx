import { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import FallingText from '../components/FallingText';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      <Navigation />
      <FallingText />
    </div>
  );
};

export default Home;
