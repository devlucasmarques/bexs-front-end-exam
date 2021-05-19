import styled from 'styled-components';
import { down } from '../../styles/medias';
import theme from '../../styles/theme';

const Container = styled.div`
  position: absolute;
  top: 352px;
  left: calc(64px + ((100vw - 1024px) / 2));
  width: 364px;
  height: 224px;

  @media (${down.laptop}) {
    left: 64px;
  }

  @media (${down.tablet}) {
    left: calc(50% - 140px);
    width: 280px;
    top: 310px;
    height: 172px;
  }

  .letterCard {
    position: relative;
    z-index: 1;
    font: normal normal normal 22px/28px 'SFProText';
    letter-spacing: 2.31px;
    color: #ffffff;
    text-shadow: 0px 1px 2px #000000b3;
    text-align-last: justify;

    &.major {
      width: 100%;

      @media (${down.tablet}) {
        font-size: 19px;
        line-height: 21px;
      }
    }

    &.minor {
      letter-spacing: 0px;
      font-size: 16px;
      line-height: 27px;

      @media (${down.tablet}) {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
`;

const WrapperInfo = styled.div`
  position: relative;
  margin: 0 32px;

  @media (${down.tablet}) {
    margin: 0 14px;
  }
`;

const WrapperNameValid = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 28px;
`;

const ImageBackground = styled.div`
  position: absolute;
  border-radius: 8px;
  -webkit-box-shadow: 0px 25px 18px -20px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 25px 18px -20px rgba(0, 0, 0, 0.5);
  height: 223px;

  @media (${down.tablet}) {
    height: 170px;
  }
`;

const LogoVisa = styled.div`
  margin: 27px 14px 34px;
  width: 70px;

  @media (${down.tablet}) {
    width: 53px;
  }
`;

const ViewCVV = styled.div`
  position: relative;
  z-index: 2;
  color: ${theme.colors.black.normal};
  top: 30px;
  left: 184px;
  width: 50px;

  @media (${down.tablet}) {
    top: 8px;
    left: 138px;
  }
`;

const NoImage = styled.div`
  height: 23px;

  @media (${down.tablet}) {
    height: 17px;
  }
`;
export {
  Container,
  ImageBackground,
  LogoVisa,
  WrapperNameValid,
  WrapperInfo,
  ViewCVV,
  NoImage
};
