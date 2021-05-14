import Head from 'next/head';
import StageBar from '../components/stageBar';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Demo Shop</title>
      </Head>

      <main>
        <StageBar stageNumber={2} />
      </main>
    </div>
  );
};

export default Home;
