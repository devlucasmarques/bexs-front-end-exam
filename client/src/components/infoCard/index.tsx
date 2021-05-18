import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';

import imgVisa from './visa.png';
import cardBlueLado1 from './cardBlueLado1.svg';
import cardBlueLado2 from './cardBlueLado2.svg';
import cardGrayLado1 from './cardGrayLado1.svg';
import cardGrayLado2 from './cardGrayLado2.svg';
import {
  Container,
  ImageBackground,
  LogoVisa,
  WrapperNameValid,
  WrapperInfo,
  ViewCVV,
  NoImage
} from './styled';

interface IInfoCard {
  cardNumber: string;
  cardName: string;
  cardValid: string;
  cardCVV: string;
  isEnterCVV: boolean;
}

const InfoCard: FC<IInfoCard> = ({
  cardNumber,
  cardName,
  cardValid,
  cardCVV,
  isEnterCVV
}) => {
  const [imgCard, setImgCard] = useState(cardBlueLado1);
  useEffect(() => {
    if (isEnterCVV) {
      cardNumber || cardName || cardValid || cardCVV
        ? setImgCard(cardBlueLado2)
        : setImgCard(cardGrayLado2);
    } else {
      cardNumber || cardName || cardValid || cardCVV
        ? setImgCard(cardBlueLado1)
        : setImgCard(cardGrayLado1);
    }
  }, [cardNumber, cardName, cardValid, cardCVV, isEnterCVV]);

  return (
    <Container>
      <ImageBackground>
        <Image alt="Cartão" src={imgCard} height={224} width={364} />
      </ImageBackground>
      <LogoVisa>
        {!isEnterCVV && (cardNumber || cardName || cardValid || cardCVV) ? (
          <Image
            alt="Visa"
            src={imgVisa}
            height={23}
            width={70}
            layout="responsive"
          />
        ) : (
          <NoImage />
        )}
      </LogoVisa>
      {!isEnterCVV ? (
        <WrapperInfo>
          <p className="letterCard major">
            {cardNumber || '**** **** **** ****'}
          </p>
          <WrapperNameValid>
            <p className="letterCard minor">{cardName || 'NOME DO TITULAR'}</p>
            <p className="letterCard minor">{cardValid || '00/00'}</p>
          </WrapperNameValid>
        </WrapperInfo>
      ) : (
        <ViewCVV>***</ViewCVV>
      )}
    </Container>
  );
};

export default InfoCard;
