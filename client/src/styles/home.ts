import styled from "styled-components";
import { down } from "./medias";
import theme from "./theme";

const StagePage = styled.div`
  display: flex;
  justify-content: space-between;
  height: 596px;
  max-width: 1024px;
  background-color: ${theme.colors.white.normal};
  margin: 64px auto;

  @media (${down.tablet}) {
    display: block;
    height: auto;
  }
`;

const FormContainer = styled.div`
  padding: 50px 64px 0 0px;
  max-width: 504px;

  @media (${down.tablet}) {
    padding: 110px 40px 0;
    margin: 0 auto;
  }
`;

const Main = styled.main`
  height: 100vh;
`;

const Nav = styled.nav`
  background-color: ${theme.colors.white.normal};
  padding: 24px calc((100vw - 1024px) / 2);
`;

const HomeContainer = styled.div`
  background-color: ${theme.colors.gray.light};

`;

export { StagePage, FormContainer, Main, Nav, HomeContainer };
