import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client";

import { Container, Links, Text, DropdownContainer } from "./style";

import { GET_TYPES } from "@/graphql/query";
import Pokeball from "@/components/icons/pokeball";
import World from "@/components/icons/world";
import If from "@/components/if";

const Header = () => {
  const { data, loading, error } = useQuery(GET_TYPES, {});

  return (
    <Container>
      <Link href="/" passHref={true}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="pokemon logo"
          width={300}
          height={100}
        />
      </Link>
      <div>Search...</div>
      <Links>
        <DropdownContainer>
          <If condition={!loading}>
            <select>
              <option value="all">All</option>
              {data?.types?.results.map((type: any) => (
                <option key={type.name} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </If>
        </DropdownContainer>
        <Link href="/" passHref={true}>
          <div>
            <World size={5} />
            <Text>World</Text>
          </div>
        </Link>
        <Link href="/collection" passHref={true}>
          <div>
            <Pokeball size={5} />
            <Text>My Pokemons</Text>
          </div>
        </Link>
      </Links>
    </Container>
  );
};

export default Header;
