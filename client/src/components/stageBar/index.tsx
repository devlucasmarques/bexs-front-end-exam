import React, { FC } from 'react';
import Image from 'next/image';

import imgAddCard from './imgAddCard.svg';
import { Header, Head2, WrapperTitle, WrapperImage, Nav } from './styles';
import { Chevron, Direction } from '../chevron/styles';
import theme from '../../styles/theme';

export interface IStageBar {
  stageNumber: number;
}

const StageBar: FC<IStageBar> = ({ stageNumber = 1 }) => {
  const handleClickBack = () => {
    window && window.history.back();
  };

  return (
    <Header>
      <Nav>
        <Chevron
          direction={Direction.left}
          margin="1px 14px 0 0"
          size={{ laptop: 8, mobile: 12 }}
          color={theme.colors.white.normal}
        />
        <ul>
          <li onClick={handleClickBack}>Alterar forma de pagamento</li>
        </ul>
        <p className="stage">
          <strong>Etapa {stageNumber} </strong>de 3
        </p>
      </Nav>
      <WrapperTitle>
        <WrapperImage>
          <Image
            alt="Adicione um novo cartão de crédito"
            src={imgAddCard}
            width={50}
            height={50}
          />
        </WrapperImage>
        <Head2>Adicione um novo cartão de crédito</Head2>
      </WrapperTitle>
    </Header>
  );
};

export default StageBar;
