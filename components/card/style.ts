import styled from 'styled-components';

type Props = {
  color: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 4px solid var(--dark-black);
  width: 15em;

  background-color: ${(props) => props.color};
  margin: 1em;

  transform: skew(-5deg);
  transition: all 0.25s;
  box-shadow: 9px 10px 0 var(--light-blue);

  cursor: pointer;

  &:hover {
    box-shadow: none;
    transform: skew(-5deg) translateX(5px);
  }

  h1 {
    margin: 1em;
    font-size: 1.7em;
    color: var(--dark-white);
    text-shadow: -1px -1px 0 var(--dark-black), 1px -1px 0 var(--dark-black),
    -1px 1px 0 var(--dark-black), 1px 1px 0 var(--dark-black),
    2px 2px 0 var(--dark-black), 2px 2px 0 var(--dark-black),
    3px 3px 0 var(--dark-black);
  }

  p {
    margin: 0;
    margin-right: 1em;
    align-self: flex-end;
    position: relative;
    display: inline-block;
    font-size: 1.5em;
    color: var(--dark-white);
    text-shadow: -1px -1px 0 var(--dark-black), 1px -1px 0 var(--dark-black),
    -1px 1px 0 var(--dark-black), 1px 1px 0 var(--dark-black),
    2px 2px 0 var(--dark-black), 2px 2px 0 var(--dark-black),
    3px 3px 0 var(--dark-black);
  }
`;

export const Circle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  width: 10em;
  height: 10em;
  background-color: ${(props) => props.color};
`;
