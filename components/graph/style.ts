import styled from "styled-components";

import { ThickBorderNoHover } from "@/styles/global";

export const Container = styled.div`
  margin-top: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const GraphContainer = styled(ThickBorderNoHover)`
  padding: 3em;
  overflow: auto;
  margin-bottom: 2em;

  transform: skew(0deg);

  div {
    margin-bottom: 1em;
  }

  h1 {
    margin: 0;
    margin-bottom: 1em;
  }
`;

export type TypeColor = {
  color: string;
};

export const TypeContainer = styled.div`
  display: flex;
  padding: 0.2em;
  width: 30em;

  div {
    font-weight: bold;
    text-align: left;
    min-width: 8em;
  }

  progress[value] {
    height: 1em;
    margin-right: 2em;
    
    -webkit-appearance: none;
    appearance: none;

    border-radius: 5em;
  }

  progress::-moz-progress-bar { 
    background: ${(props: TypeColor) => props.color};
    border-radius: 5em;
 }
  progress::-webkit-progress-value { 
    background: ${(props: TypeColor) => props.color}; 
    border-radius: 5em;
  }
`;