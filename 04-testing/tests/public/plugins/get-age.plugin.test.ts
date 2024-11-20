import { describe, expect, jest, test } from '@jest/globals';
import { getAge } from '../../../src/js-foundation/public/plugins/get-age.plugin';

describe('/js-foundation/public/plugins/get-age.plugin', () => {

  test(' getAge should return the age of a person', () => {
    const birthday = '1994-08-13';
    const age = getAge( birthday );

    expect( age ).toBe( 30 );
  });

  /**
   * spyOn crea un espía en el método Date.prototype.getFullYear y lo reemplaza por una función 
   * mockReturnValue que devuelve 1994.
   */
  test('getAge should return 0 year', () => {
    const spyYear = jest.spyOn( Date.prototype, 'getFullYear' ).mockReturnValue( 1994 );
    const age = getAge( '1994-08-13' );

    expect( age ).toBe( 0 );
  });
})