import styled from 'styled-components';
import { down } from '../../styles/medias';
import theme from '../../styles/theme';

const Text = styled.p`
  color: ${theme.colors.red.normal};
  font-family: 'Inter';
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  .path-bar-text {
    :not(:first-child) {
      margin-left: 8px;
    }

    :not(:last-child) {
      margin-right: 24px;
    }
  }

  @media (${down.tablet}) {
    display: none;
  }
`;

const StageNumber = styled.div`
  border-radius: 50%;
  border: 2px solid ${theme.colors.red.normal};
  height: 22px;
  width: 22px;
  text-align: center;
  color: ${theme.colors.red.normal};
  font-family: 'Arial';
  line-height: 18px;
  font-size: 13px;
  font-weight: bold;
`;

export { Text, Container, StageNumber };