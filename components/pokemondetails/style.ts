import styled from "styled-components";

import {ThickBorderNoHover, ThickBorder} from '@/styles/global';

type ContainerProps = {
  backgroundColor: string;
}

export const Contaier = styled.div<ContainerProps>`
  display: flex;
  height: 100%;

  padding: 1em;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.backgroundColor};
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5em;
`;

export const PokemonTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2em;
  width: 100%;
  margin-bottom: 1em;

  span {
    padding-left: 0.5em;
  }
`;

export const InfoContainer = styled(ThickBorderNoHover)`
  background-color: #fff;

  display: flex;
  margin: 3em;
  padding: 1em;
`;

export const Info = styled.div`
  padding: 1em;
`;

export const Moves = styled.div`
  padding: 1em;
  max-width: 20em;
  div {
    overflow-y: scroll;
    max-height: 30em;
  }
`;

export const CatchButton = styled(ThickBorder)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1em;
  background-color: #fff;

  margin-top: 1em;

  font-weight: bold;

  cursor: pointer;

  svg {
    margin-right: 1em;
  }
`;
