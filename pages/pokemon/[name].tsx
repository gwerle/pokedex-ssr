import { Badge, Flex, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { getPokemonByName } from '../../services/requests';
import { Colors } from '../../styles/pokemon-type';

export default function Pokemon({ pokemon }: any): JSX.Element {
  return (
    <Flex
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#e5e6f1"
    >
      <div>
        <Image
          height="250px"
          width="250px"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          loading="eager"
        />
        <Text fontSize="24px" textAlign="center">
          {pokemon.name}
        </Text>
        <div style={{ textAlign: 'center' }}>
          {pokemon.types.map(type => {
            const colorByType = Colors.find(t => t.name === type.type.name);
            return (
              <Badge
                borderRadius="5px"
                background={colorByType.color}
                color="white"
                padding="1.5"
                margin="1"
              >
                {type.type.name}
              </Badge>
            );
          })}
        </div>
      </div>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context;
  const pokemon = await getPokemonByName(params.name as string);

  return {
    props: {
      pokemon: pokemon.data,
    },
  };
};
