import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client";

import useRandomColor from "@/hooks/useRandomColor";
import If from "@/components/if";
import { GET_TYPE } from "@/graphql/query";

import { Type } from "@/types/pokemon";

import { Container, Circle, Types } from "./style";

type CardProps = {
  id: number;
  name: string;
  image: string;
};

const Card = ({ id, name, image }: CardProps) => {
  const { data, loading, error } = useQuery(GET_TYPE, {
    variables: { name },
  });

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
          <If condition={!loading && !error}>
            <Types>
              {data.pokemon?.types
                .map((type: Type) => type.type.name)
                .join(", ")
                .toUpperCase()}
            </Types>
          </If>
        </Container>
      </Link>
    </If>
  );
};

export default Card;
