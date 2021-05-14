import Head from 'next/head';
import StageBar from '../components/stageBar';
import React from 'react';
import { StagePage } from '../styles/home';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Demo Shop</title>
      </Head>

      <main>
        <StagePage>
          <StageBar stageNumber={2} />
          <div>Forms</div>
        </StagePage>
      </main>
    </div>
  );
};

export default Home;
