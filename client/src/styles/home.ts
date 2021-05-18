import styled from "styled-components";
import { down } from "./medias";

const StagePage = styled.div`
  display: flex;
  justify-content: space-between;
  height: 596px;
  max-width: 1024px;

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

export { StagePage, FormContainer };
