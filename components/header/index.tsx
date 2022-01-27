import Image from "next/image";
import Link from "next/link";

import { Container, Links, Text } from "./style";

import Pokeball from "../icons/pokeball";
import World from "../icons/world";

const Header = () => {
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
