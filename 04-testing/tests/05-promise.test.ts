import { describe, expect, test } from "@jest/globals";
import { httpClientAdapter } from "../src/js-foundation/public/http.adapter";

describe('js-foundation/public/http.adapter', () => {
  test('httpClientAdapter should return a pokemon', async () => {
    const { name } = await httpClientAdapter.get('https://pokeapi.co/api/v2/pokemon/2');

    expect(name).toBe('ivysaur');
  })

  test('httpClientAdapter should return an error if not found the direction', async () => {
    try {
      await httpClientAdapter.get('https://pokeapi.co/api/v2/pokemon/10000000');
      
      // This line should not be executed
      expect(true).toBe(false);
    } catch ( error: any ) {
      expect(error.message).toBe('Error fetching data');
    }
  });
})