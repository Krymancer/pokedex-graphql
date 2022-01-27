import styled from "styled-components";

import { ThickBorder } from "@/styles/global";

export const Container = styled.div`
  margin: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownContainer = styled(ThickBorder)`
  display: flex;
`;

export const Links = styled.div`
  display: flex;
    
  div {
    display: flex;
    align-items: center;
    padding: 0.2em;

    border: 4px solid var(--dark-black);
    background-color: var(--white);
    margin-right: 1em;
    transform: skew(-5deg);
    transition: all 0.25s;
    box-shadow: 9px 10px 0 var(--light-blue);

    &:hover {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
  }
`;

export const Text = styled.span`
  padding: 0.3em;

    font-size: 1.5em;
    color: var(--dark-white);
    text-shadow: -1px -1px 0 var(--dark-black), 1px -1px 0 var(--dark-black),
    -1px 1px 0 var(--dark-black), 1px 1px 0 var(--dark-black),
    2px 2px 0 var(--dark-black), 2px 2px 0 var(--dark-black),
    3px 3px 0 var(--dark-black);

    margin-right: 1em;
`;