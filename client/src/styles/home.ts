import styled from "styled-components";
import { down } from "./medias";

const StagePage = styled.div`
  display: flex;
  height: 596px;

  @media (${down.tablet}) {
    display: block;
    height: auto;
  }
`;

const FormContainer = styled.div`
  padding: 50px 64px 0 168px;

  @media (${down.tablet}) {
    padding: 110px 40px 0;
  }
`;

export { StagePage, FormContainer };
