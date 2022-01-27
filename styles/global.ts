import styled, { DefaultTheme } from "styled-components";

import { createGlobalStyle } from "styled-components";

export const defaultTheme : DefaultTheme =  {
    backgroundColor: "#fff",
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme?.backgroundColor ?? "#fff"};
  }
`;

export const ThickBorder = styled.div`
  border: 4px solid var(--dark-black);

  transform: skew(-5deg);
  transition: all 0.25s;
  box-shadow: 9px 10px 0 var(--light-blue);

  &:hover {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`;

export const ThickBorderNoHover = styled.div`
  border: 4px solid var(--dark-black);

  transform: skew(-5deg);
  transition: all 0.25s;
  box-shadow: 9px 10px 0 var(--light-blue);
`;

export const CoolText = styled.div`
  color: var(--dark-white);
  text-shadow: -1px -1px 0 var(--dark-black), 1px -1px 0 var(--dark-black),
  -1px 1px 0 var(--dark-black), 1px 1px 0 var(--dark-black),
  2px 2px 0 var(--dark-black), 2px 2px 0 var(--dark-black),
  3px 3px 0 var(--dark-black);
`;