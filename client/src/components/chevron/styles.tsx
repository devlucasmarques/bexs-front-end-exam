import styled, { css } from 'styled-components';
import { down } from '../../styles/medias';

export enum Direction {
  up,
  down,
  left,
  right
}

export interface IChevron {
  direction: Direction;
  margin: string;
  size: {
    laptop: number;
    mobile: number;
  };
}

const chevronRight = css`
  left: 0;
  transform: rotate(45deg);
`;

const chevronDown = css`
  top: 0;
  transform: rotate(135deg);
`;

const chevronLeft = css`
  left: 0.25em;
  transform: rotate(-135deg);
`;

const Chevron = styled.p<IChevron>`
  height: ${(props) => props.size.laptop * 2}px;

  @media (${down.tablet}) {
    height: ${(props) => props.size.mobile * 2}px;
  }

  ::before {
    border-style: solid;
    border-width: 0.18em 0.18em 0 0;
    content: '';
    display: inline-block;
    left: 0.15em;
    position: relative;
    top: 0.15em;
    transform: rotate(-45deg);
    vertical-align: top;
    margin: ${(props) => props.margin};
    height: ${(props) => props.size.laptop}px;
    width: ${(props) => props.size.laptop}px;

    ${(props) => props.direction === Direction.right && chevronRight}
    ${(props) => props.direction === Direction.left && chevronLeft}
    ${(props) => props.direction === Direction.down && chevronDown}

    @media (${down.tablet}) {
      height: ${(props) => props.size.mobile}px;
      width: ${(props) => props.size.mobile}px;
    }
  }
`;

export { Chevron };
