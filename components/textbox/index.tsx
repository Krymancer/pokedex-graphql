type Props = {
  text: string;
};

import { Container, ContainerText } from "./style";

const TextBox = ({ text }: Props) => {
  return (
    <Container>
      <ContainerText>{text}</ContainerText>
    </Container>
  );
};

export default TextBox;
