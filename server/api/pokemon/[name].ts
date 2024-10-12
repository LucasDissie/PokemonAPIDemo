import { PokemonClient } from 'pokenode-ts';
import type { Pokemon } from 'pokenode-ts';

export type PokemonResponse = {
  success: boolean;
  data?: Pokemon;
  error?: string;
};

const api = new PokemonClient();

export default defineEventHandler(async (event): Promise<PokemonResponse> => {
  const name = getRouterParam(event, 'name');
  
  if (!name) {
    return {
      success: false,
      error: 'No name provided',
    };
  }

  try {
    const pokemon: Pokemon = await getPokemon(name);
    return {
      success: true,
      data: pokemon,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
});

const getPokemon = async (name: string): Promise<Pokemon> => {
  return await api.getPokemonByName(name);
};
