import styled from "styled-components";

import { ThickBorder } from "@/styles/global";

export const Container = styled.div`
  margin: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1em;
  }
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

    cursor: pointer;

    &:hover {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
  }
`;

export const Input = styled.input`
  font-size: 1.5em;
  font-weight: bold;
  
  padding: 0.2em;

  outline: none;
  border:0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 4px solid var(--dark-black);

  transform: skew(-5deg);
  transition: all 0.25s;
  box-shadow: 9px 10px 0 var(--light-blue);

  &:hover {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }
`;

export const Text = styled.span`
    padding: 1em;
    background-color: rgba(0,0,0,0);

    font-size: 1.2em;
    font-weight: bold;
    margin-right: 1em;
`;

export const Select = styled.select`
  border: none;
  font-weight: bold;
  background-color: rgba(0,0,0,0);
  font-size: 1.2em;
`;
