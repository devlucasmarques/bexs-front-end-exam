import styled from 'styled-components';
import { down } from '../../styles/medias';
import theme from '../../styles/theme';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 46px;

  @media (${down.custom950}) {
    max-width: 280px;
    margin: 46px 0 0 75px;
  }

  @media (${down.tablet}) {
    margin: 0 auto;
  }
`;

const Button = styled.button`
  background-color: ${theme.colors.red.normal};
  color: ${theme.colors.white.normal};
  text-transform: uppercase;
  padding: 16px 71px;
  font: normal normal 600 17px/22px 'Verdana', sans-serif;
  border: none;
  border-radius: 10px;
  margin-top: 16px;
  float: right;

  @media (${down.tablet}) {
    width: 100%;
    margin: 0 0 55px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export { Form, Button, ButtonWrapper };
