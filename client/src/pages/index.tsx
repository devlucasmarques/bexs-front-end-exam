import Head from 'next/head';
import StageBar from '../components/stageBar';
import React, { useState } from 'react';
import { StagePage, FormContainer } from '../styles/home';
import InfoCard from '../components/infoCard';
import PathBar from '../components/pathBar';
import FormCard from '../components/formCard';

const Home: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('5149 4505 6231 6542');
  const [cardName, setCardName] = useState('FELIPE B A PIO NT');
  const [cardValid, setCardValid] = useState('06/27');
  const [cardCVV, setCardCVV] = useState('123');
  const [cardIsEnterCVV, setCardIsEnterCVV] = useState(false);
  return (
    <div>
      <Head>
        <title>Demo Shop</title>
      </Head>

      <main>
        <StagePage>
          <StageBar stageNumber={2} />
          <InfoCard
            cardNumber={cardNumber}
            cardName={cardName}
            cardValid={cardValid}
            cardCVV={cardCVV}
            isEnterCVV={cardIsEnterCVV}
          />
          <FormContainer>
            <PathBar stageNumber={2} />
            <FormCard
              setCardNumber={setCardNumber}
              setCardName={setCardName}
              setCardValid={setCardValid}
              setCardCVV={setCardCVV}
              setCardIsEnterCVV={setCardIsEnterCVV}
            />
          </FormContainer>
        </StagePage>
      </main>
    </div>
  );
};

export default Home;
