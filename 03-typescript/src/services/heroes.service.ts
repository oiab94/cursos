import { heroes } from '../data';


const findHeroById = ( id: number ) => {
	return heroes.find( hero => hero.id === id );
}

export {
	findHeroById,
}
