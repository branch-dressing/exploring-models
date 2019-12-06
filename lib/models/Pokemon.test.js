const Pokemon = require('./Pokemon.js');

describe('Pokemon model', () => {
    describe('Pokemon name', () => {
        it('requires a name', () => {
            const pokemon = new Pokemon({
                type: 'fire',
                pokedexNumber: 4
            });
    
            const { errors } = pokemon.validateSync();
            expect(errors.name.message).toEqual('Path `name` is required.');
        });
    });

    describe('Pokemon type', () => {
        it('requires a type', () => {
            const pokemon = new Pokemon({
                name: 'Pikachu',
                pokedexNumber: 25
            });
    
            const { errors } = pokemon.validateSync();
            expect(errors.type.message).toEqual('Path `type` is required.');
        });
    });

    describe('Pokedex number', () => {
        it('requires a number', () => {
            const pokemon = new Pokemon({
                name: 'Pikachu',
                type: 'Electric'
            });
    
            const { errors } = pokemon.validateSync();
            expect(errors.pokedexNumber.message).toEqual('Path `pokedexNumber` is required.');
        });

        it('number must be above 1', () => {
            const pokemon = new Pokemon({
                name: 'Pikachu',
                type: 'Electric',
                pokedexNumber: 0
            });

            const { errors } = pokemon.validateSync();
            expect(errors.pokedexNumber.message).toEqual('Path `pokedexNumber` (0) is less than minimum allowed value (1).'); 
        });

        it('number must be below 151 (cause we only doing the original 151 bitches!!!', () => {
            const pokemon = new Pokemon({
                name: 'Pikachu',
                type: 'Electric',
                pokedexNumber: 152
            });

            const { errors } = pokemon.validateSync();
            expect(errors.pokedexNumber.message).toEqual('Path `pokedexNumber` (152) is more than maximum allowed value (151).'); 
        });
    });
});

