import useRandomColor from "@/hooks/useRandomColor";
import Image from "next/image";
import Link from "next/link";
import If from "../if";

import { Container, Circle } from "./style";

type CardProps = {
  id: number;
  name: string;
  image: string;
};

const Card = ({ id, name, image }: CardProps) => {
  const flag = id % 3;
  const color = useRandomColor(flag);

  return (
    <If condition={typeof { name, image } === "object"}>
      <Link
        href={{
          pathname: "pokemon/[name]",
          query: { image },
        }}
        as={`/pokemon/${name}`}
        passHref={true}
      >
        <Container color={color.dark}>
          <p>{`#${id}`}</p>
          <Circle color={color.light}>
            <Image src={image} alt={name} width={100} height={100} />
          </Circle>
          <h1>{name.toUpperCase()}</h1>
        </Container>
      </Link>
    </If>
  );
};

export default Card;
