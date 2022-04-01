class Room {
  constructor(public title: string, public description: string) {}

  addConnection(direction: string, room: Room) {
    throw new Error("not implemented");
  }
}

class Game {
  constructor(private currentRoom: Room) {}

  current = (): Room => {
    return this.currentRoom;
  };

  move(direction: string): Room {
    throw new Error("not implemented");
  }
}

describe("Game", function () {
  it("should be initialised to the starting room", function () {
    const initialRoom = new Room(
      "LOST IN SHOREDITCH.",
      "YOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. \n" +
        "AROUND YOU IS A FOREST OF INDIAN RESTAURANTS. \n" +
        "A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY."
    );

    const game = new Game(initialRoom);
    const room = game.current();

    expect(room.title).toBe("LOST IN SHOREDITCH.");
    expect(room.description).toBe(
      "YOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. \n" +
        "AROUND YOU IS A FOREST OF INDIAN RESTAURANTS. \n" +
        "A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY."
    );
  });

  it("should move to a new room", () => {
    const initialRoom = new Room(
      "LOST IN SHOREDITCH.",
      "YOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. \n" +
        "AROUND YOU IS A FOREST OF INDIAN RESTAURANTS. \n" +
        "A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY."
    );

    const nextRoom = new Room("another room", "its empty");

    initialRoom.addConnection("L", nextRoom);

    const game = new Game(initialRoom);

    const currentRoom = game.move("L");

    expect(currentRoom).toBe(nextRoom);
  });
});

/**\
 
const startingRoom = new Room(blah blah)
const nextRoom = new Room(other room)

startingRoom.addConnection("L", nextRoom)
nextRoom.addConnection("R", startingRoom)
 
const game = new Game(startingRoom)

game.move("L")

 
 **/
