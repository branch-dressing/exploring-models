
const Color = require('./Color.js');

describe('Color model', () => {
    describe('name', () => {
        it('requires a name', () => {
            const color = new Color({
                red: 255,
                green: 0,
                blue: 0
            });
    
            const { errors } = color.validateSync();
            expect(errors.name.message).toEqual('Path `name` is required.');
        });
    });

    describe('red', () => {
        it('has a required red value', () =>{
            const color = new Color({
                name: 'red',
                green: 0,
                blue: 0
            });

            const { errors } = color.validateSync();
            expect(errors.red.message).toEqual('Path `red` is required.');
        });
    
        it('has a required red value above 0', () => {
            const color = new Color({
                name: 'red',
                red: -1,
                green: 0,
                blue: 0
            });

            const { errors } = color.validateSync();
            expect(errors.red.message).toEqual('Path `red` (-1) is less than minimum allowed value (0).');
        });

        it('has a required red value under 256', () => {
            const color = new Color({
                name: 'red',
                red: 256,
                green: 0,
                blue: 0
            });

            const { errors } = color.validateSync();
            expect(errors.red.message).toEqual('Path `red` (256) is more than maximum allowed value (255).');
        });
    });

    describe('blue', () => {
        it('has a required blue value', () =>{
            const color = new Color({
                name: 'blue',
                green: 0,
                red: 0
            });

            const { errors } = color.validateSync();
            expect(errors.blue.message).toEqual('Path `blue` is required.');
        });
    
        it('has a required blue value above 0', () => {
            const color = new Color({
                name: 'blue',
                red: 0,
                green: 0,
                blue: -1
            });

            const { errors } = color.validateSync();
            expect(errors.blue.message).toEqual('Path `blue` (-1) is less than minimum allowed value (0).');
        });

        it('has a required blue value under 256', () => {
            const color = new Color({
                name: 'blue',
                red: 0,
                green: 0,
                blue: 256
            });

            const { errors } = color.validateSync();
            expect(errors.blue.message).toEqual('Path `blue` (256) is more than maximum allowed value (255).');
        });
    });
    
    describe('green', () => {
        it('has a required green value', () =>{
            const color = new Color({
                name: 'green',
                blue: 0,
                red: 0
            });

            const { errors } = color.validateSync();
            expect(errors.green.message).toEqual('Path `green` is required.');
        });
    
        it('has a required green value above 0', () => {
            const color = new Color({
                name: 'green',
                red: 0,
                blue: 0,
                green: -1
            });

            const { errors } = color.validateSync();
            expect(errors.green.message).toEqual('Path `green` (-1) is less than minimum allowed value (0).');
        });

        it('has a required green value under 256', () => {
            const color = new Color({
                name: 'green',
                red: 0,
                blue: 0,
                green: 256
            });

            const { errors } = color.validateSync();
            expect(errors.green.message).toEqual('Path `green` (256) is more than maximum allowed value (255).');
        });
    });
});

