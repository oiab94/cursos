import { describe, expect, test } from '@jest/globals';
import { getUserById } from '../src/js-foundation/02-callbacks';

describe('js-foundation/02-callbacks', () => {
	
	test('getUserById should return error if user not found', ( done ) => {
		const id = 10;
	
		getUserById( id, ( err, User ) => {
			
			expect( err ).toBe('User not found');
			expect( User ).toBeUndefined();

			done(); // Indica que la prueba ha finalizado cuando se obtiene el resultado esperado
		})
	});

	test('getUserById should return user if found', ( done ) => {
		const id = 1;

		getUserById( id, ( err, User ) => { 
			
			expect( err ).toBeUndefined();
			expect( User ).toEqual({ id: 1, name: 'John' });

			done(); // Indica que la prueba ha finalizado cuando se obtiene el resultado esperado
		});
	});

});
