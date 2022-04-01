import { Game } from "./Game";
import { Room } from "./Room";

describe("Game", function () {
  let initialRoom: Room;

  beforeEach(() => {
    initialRoom = new Room(
      "LOST IN SHOREDITCH.",
      "YOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. \n" +
        "AROUND YOU IS A FOREST OF INDIAN RESTAURANTS. \n" +
        "A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY."
    );
  });

  it("should be initialised to the starting room", function () {
    const game = new Game(initialRoom);
    const currentRoom = game.current();

    expect(currentRoom).toBe(initialRoom);
  });

  it("should move to a new room", () => {
    const game = new Game(initialRoom);

    const nextRoom = game.addRoom("another room", "its empty");
    initialRoom.addConnection("W", nextRoom);

    const currentRoom = game.move("W");

    expect(currentRoom).toBe(nextRoom);
  });

  it("should move up to a new room", () => {
    const game = new Game(initialRoom);
    const nextRoom = game.addRoom("another room", "its empty");

    initialRoom.addConnection("U", nextRoom);

    const currentRoom = game.move("U");

    expect(currentRoom).toBe(nextRoom);
  });

  it("should not be able to add a room with an existing title", () => {
    const game = new Game(initialRoom);

    const nextRoom = game.addRoom("another room", "its empty");

    initialRoom.addConnection("W", nextRoom);

    expect(() => game.addRoom("another room", "its empty")).toThrowError(
      "room exists"
    );
  });
});
