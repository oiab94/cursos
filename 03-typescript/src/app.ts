import { findHeroById } from './services/heroes.service';

const hero = findHeroById( 6 );

console.log( hero || 'Hero not found' );
