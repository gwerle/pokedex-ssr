import api from './api';

export function getAllPokemons(): Promise<any> {
  return api.get('pokemon?limit=100&offset=200');
}

export function getPokemonByName(name: string): Promise<any> {
  return api.get(`pokemon/${name}`);
}
