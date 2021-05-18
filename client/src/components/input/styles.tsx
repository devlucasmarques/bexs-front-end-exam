import styled from 'styled-components';
import { down } from '../../styles/medias';
import theme from '../../styles/theme';

interface IInput {
  width?: string;
  error?: boolean;
}

const Label = styled.label`
  color: ${theme.colors.gray.normal};
  position: relative;
  top: -50px;
  font: normal normal normal 17px/22px 'Arial';
  transition: all 200ms linear;
`;

const Input = styled.input<IInput>`
  color: ${theme.colors.black.normal};
  width: 100%;
  border: none;
  font: normal normal normal 17px/22px 'Arial';
  padding: 2px;
  outline: none;
  border-bottom: 1px solid
    ${(props) =>
      props.error ? theme.colors.red.normal : theme.colors.gray.normal};

  ~ p {
    visibility: ${(props) => (props.error ? 'visible' : 'hidden')};
  }

  &:focus,
  &:not(:placeholder-shown) {
    ~ label {
      top: -75px;
      font-size: 13px;
    }

    ~ .img-info {
      top: -95px;
      left: 25px;
    }
  }
`;

const InputContainer = styled.div<IInput>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: 82px;

  @media (${down.tablet}) {
    height: 75px;
  }
`;

const Error = styled.p<IInput>`
  color: ${theme.colors.red.error};
  margin-top: 3px;
  font: normal normal normal 13px/22px 'Arial';
`;

const ChevronWrapper = styled.div`
  position: relative;
  top: -68px;
  left: 420px;
  width: 8px;

  @media (${down.tablet}) {
    left: 252px;
  }
`;

const ImageWrapper = styled.div`
  height: 13px;
  width: 13px;
  margin: 2px 0 0 8px;
  position: relative;
  top: -71px;
  left: 30px;
  transition: all 200ms linear;
`;

const Options = styled.div`
  position: absolute;
  color: ${theme.colors.black.normal};
  background-color: ${theme.colors.white.normal};
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.53);
  box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.2);
  height: 100px;
  width: 440px;
  overflow-y: scroll;
  z-index: 1;
  margin-top: 35px;
  opacity: 1;
  transition: opacity 300ms linear;

  &.show-false {
    visibility: hidden;
    opacity: 0;
  }

  @media (${down.tablet}) {
    width: 280px;
  }

  li {
    padding: 4px;
    font: normal normal normal 17px/22px 'Arial';

    &:hover {
      background-color: ${theme.colors.gray.normal};
    }
  }
`;

export {
  Label,
  Input,
  InputContainer,
  Error,
  ChevronWrapper,
  ImageWrapper,
  Options
};
