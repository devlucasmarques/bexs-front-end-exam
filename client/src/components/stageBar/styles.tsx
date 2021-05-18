import styled from 'styled-components';
import theme from '../../styles/theme';
import { down } from '../../styles/medias';

const paddingLeft = 64;
const paddingRight = 16;
const paddingCenter = 2 * paddingLeft;

const WrapperImage = styled.div`
  min-width: 50px;
  min-height: 50px;
  max-height: 50px;

  @media (${down.mobile}) {
    min-width: 40px;
    min-height: 40px;
    max-height: 40px;
  }
`;

const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 53px;

  @media (${down.tablet}) {
    padding-bottom: 114px;
  }

  @media (${down.mobile}) {
    margin: 0 55px;
  }
`;

const Header = styled.header`
  background-color: ${theme.colors.red.normal};
  padding: 0 ${paddingRight}px 0 ${paddingLeft}px;
  width: 352px;
  min-width: 352px;

  @media (${down.tablet}) {
    width: 100%;
  }

  @media (${down.mobile}) {
    padding: 0 15px;
  }
`;

const Head2 = styled.h2`
  font: normal normal bold 20px/24px 'Lato';
  font-family: 'Inter';
  color: ${theme.colors.white.normal};
  margin-left: 16px;

  @media (${down.mobile}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 53px;
  padding-top: 53px;

  > ul {
    font: normal normal normal 13px/22px Inter;
    font-family: Inter, Geneva, Tahoma, sans-serif;
  }

  > p.stage {
    display: none;
    position: absolute;
    width: calc(100% - ${paddingCenter}px);
    text-align: center;
    font: normal normal normal 13px/36px Inter;
    font-family: Inter, Geneva, Tahoma, sans-serif;
  }

  @media (${down.tablet}) {
    margin-bottom: 30px;
    padding-top: 40px;

    > ul {
      display: none;
    }

    > p.stage {
      display: block;
    }
  }

  @media (${down.mobile}) {
    > p.stage {
      margin-left: 55px;
    }
  }
`;

export { Header, Head2, WrapperTitle, Nav, WrapperImage };
