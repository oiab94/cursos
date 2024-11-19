import { describe, test, expect } from '@jest/globals'
import { buildMakePerson } from '../src/js-foundation/04-factory-function'

describe('js-foundation/04-factory-function', () => {
  const getUUID = () => '1234';
  const getAge = (birthdate: string) => 30;

  test('buildMakePerson should be return a function', () => {
    const makePerson = buildMakePerson( getUUID, getAge );

    expect(typeof makePerson).toBe('function');
  });

  test('makePerson should be return a person', () => {
    const makePerson = buildMakePerson( getUUID, getAge );
    const john = makePerson('John Doe', '1990-01-01');

    expect(john).toEqual({ 
      id: '1234', 
      name: 'John Doe', 
      birthdate: '1990-01-01', 
      age: 30 });
  })
})