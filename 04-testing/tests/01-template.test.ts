import { test, describe, expect } from '@jest/globals'
import { emailTemplate } from '../src/js-foundation/01-template'

describe('js-foundation/01-template', () => {
	test('emailTemplate should contain a greetings', () => {
		expect( emailTemplate({ name: 'Oscar', email:'test@test' }) ).toContain('Hi');
	})

	test('emailTemplate should contain the name and email', () => {
		const userEmail= { name: 'Oscar', email:'test@test' }

		expect( emailTemplate( userEmail ) ).toContain(userEmail.name);
		expect( emailTemplate( userEmail ) ).toContain(userEmail.email);
	})
})
