import Head from 'next/head';
import StageBar from '../components/stageBar';
import React, { useState } from 'react';
import {
  StagePage,
  FormContainer,
  Main,
  Nav,
  HomeContainer
} from '../styles/home';
import InfoCard from '../components/infoCard';
import PathBar from '../components/pathBar';
import FormCard from '../components/formCard';
import imgLogo from '../../public/logo.svg';
import Image from 'next/image';

const Home: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardValid, setCardValid] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cardIsEnterCVV, setCardIsEnterCVV] = useState(false);
  return (
    <HomeContainer>
      <Head>
        <title>Demo Shop</title>
      </Head>

      <Main>
        <Nav>
          <a href="http://localhost:3000/">
            <Image src={imgLogo} alt="Demo Shop" width={260} height={42} />
          </a>
        </Nav>
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
      </Main>
    </HomeContainer>
  );
};

export default Home;
