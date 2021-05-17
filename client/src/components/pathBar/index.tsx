import Image from 'next/image';
import React, { FC } from 'react';
import theme from '../../styles/theme';
import { Chevron, Direction } from '../chevron/styles';
import { Text, Container, StageNumber } from './style';
import imgCheck from './check.png';

export interface IPathBar {
  stageNumber: number;
}

const PathBar: FC<IPathBar> = ({ stageNumber }) => {
  const renderStageNumber = (num: number) =>
    stageNumber > num ? (
      <Image src={imgCheck} alt="Imagem check" width="22px" height="22px" />
    ) : (
      <StageNumber>{num}</StageNumber>
    );

  return (
    <Container>
      {renderStageNumber(1)}
      <Text className="path-bar-text">Caminho</Text>
      <Chevron
        direction={Direction.right}
        margin="0 24px 0 0"
        size={{ laptop: 8, mobile: 8 }}
        color={theme.colors.red.normal}
      />
      {renderStageNumber(2)}
      <Text className="path-bar-text">Pagamento</Text>
      <Chevron
        direction={Direction.right}
        margin="0 24px 0 0"
        size={{ laptop: 8, mobile: 8 }}
        color={theme.colors.red.normal}
      />
      {renderStageNumber(3)}
      <Text className="path-bar-text">Confirmação</Text>
    </Container>
  );
};

export default PathBar;
