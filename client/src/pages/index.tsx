import Head from 'next/head';
import StageBar from '../components/stageBar';
import React from 'react';
import StagePage from '../styles/home';
import InfoCard from '../components/infoCard';
import PathBar from '../components/pathBar';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Demo Shop</title>
      </Head>

      <main>
        <StagePage>
          <StageBar stageNumber={2} />
          <InfoCard
            cardNumber="5149 4505 6231 6542"
            cardName="FELIPE B A PIO NT"
            cardValid="06/26"
          />
          <div>
            <PathBar stageNumber={2} />
          </div>
        </StagePage>
      </main>
    </div>
  );
};

export default Home;
