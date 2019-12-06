const ZeldaGames = require('./ZeldaGames.js');

describe('ZeldaGame model', () => {
    describe('ZeldaGame title', () => {
        it('requires a title', () => {
            const zeldaGame = new ZeldaGames({
                yearReleased: 1986,
            });
    
            const { errors } = zeldaGame.validateSync();
            expect(errors.title.message).toEqual('Path `title` is required.');
        });
    });

    describe('ZeldaGame release year', () => {
        it('requires a year released', () => {
            const zeldaGame = new ZeldaGames({
                title: 'Majora\'s Mask'
            });
    
            const { errors } = zeldaGame.validateSync();
            expect(errors.yearReleased.message).toEqual('Path `yearReleased` is required.');
        });
        it('requires a that year is a date digit number', () => {
            const zeldaGame = new ZeldaGames({
                title: 'Ocarina of Time',
                yearReleased: 'in the 90s'
            });
    
            const { errors } = zeldaGame.validateSync();
            expect(errors.yearReleased.message).toEqual('Cast to Date failed for value "in the 90s" at path "yearReleased"');
        });
    });

});
