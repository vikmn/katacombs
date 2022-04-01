class Game {
    current = (): { title: string, description: string } => {

        return {
            description: "YOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. \n" +
                "AROUND YOU IS A FOREST OF INDIAN RESTAURANTS. \n" +
                "A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY.",
            title:'LOST IN SHOREDITCH.'
        }
    };
}

describe('Game', function () {
    it('should be initialised to the starting location', function () {
        const game = new Game();
        const location = game.current();
        expect(location.title).toBe('LOST IN SHOREDITCH.')
        expect(location.description).toBe('YOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. \n' +
            'AROUND YOU IS A FOREST OF INDIAN RESTAURANTS. \n' +
            'A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY.')
    });
});