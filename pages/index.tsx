import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { getAllPokemons } from '../services/requests';

export default function Home({ allPokemons }): JSX.Element {
  return (
    <div>
      {allPokemons.results.map(item => {
        return (
          <div>
            <Link href={`pokemon/${item.name}`}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const allPokemons = await getAllPokemons();

  return {
    props: {
      allPokemons: allPokemons.data,
    },
  };
};
