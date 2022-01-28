import Link from "next/link";
import { useQuery } from "@apollo/client";

import {
  Container,
  Links,
  Text,
  DropdownContainer,
  Select,
  Input,
} from "./style";

import { GET_TYPES } from "@/graphql/query";
import Pokeball from "@/components/icons/pokeball";
import World from "@/components/icons/world";
import If from "@/components/if";

import { Context } from "../../pages/_app";
import { useContext } from "react";

const Header = () => {
  const { data, loading, error } = useQuery(GET_TYPES, {});

  const { typeFilter, setTypeFilter, search, setSearch } = useContext(Context);

  const handleChange = (e: any) => {
    setTypeFilter(e.target.value);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <div>
        <Input placeholder="Search..." onChange={handleSearch} value={search} />
      </div>
      <Links>
        <DropdownContainer>
          <If condition={!loading}>
            <Text>Type: </Text>
            <Select onChange={handleChange}>
              <option value="all">all</option>
              {data?.types?.results.map((type: any) => (
                <option key={type.name} value={type.name}>
                  {type.name}
                </option>
              ))}
            </Select>
          </If>
        </DropdownContainer>
        <Link href="/" passHref={true}>
          <div>
            <World size={3} />
            <Text>World</Text>
          </div>
        </Link>
        <Link href="/collection" passHref={true}>
          <div>
            <Pokeball size={3} />
            <Text>My Pokemons</Text>
          </div>
        </Link>
      </Links>
    </Container>
  );
};

export default Header;
