import Image from 'next/image';
import React, { FC } from 'react';

import imgVisa from './visa.png';
import imgCardBackground from './cardBackground.svg';
import {
  Container,
  ImageBackground,
  LogoVisa,
  WrapperNameValid,
  WrapperInfo
} from './styled';

interface IInfoCard {
  cardNumber: string;
  cardName: string;
  cardValid: string;
}

const InfoCard: FC<IInfoCard> = ({ cardNumber, cardName, cardValid }) => {
  return (
    <Container>
      <ImageBackground>
        <Image
          alt="Cartão Visa"
          src={imgCardBackground}
          height={224}
          width={364}
        />
      </ImageBackground>
      <LogoVisa>
        {/* <Image alt="Visa" src={imgVisa} height={23} width={70} /> */}
        <Image
          alt="Visa"
          src={imgVisa}
          height={23}
          width={70}
          layout="responsive"
        />
      </LogoVisa>
      <WrapperInfo>
        <p className="letterCard major">{cardNumber}</p>
        <WrapperNameValid>
          <p className="letterCard minor">{cardName}</p>
          <p className="letterCard minor">{cardValid}</p>
        </WrapperNameValid>
      </WrapperInfo>
    </Container>
  );
};

export { InfoCard };
