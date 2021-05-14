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

export { StagePage };