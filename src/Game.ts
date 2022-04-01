import { Direction } from "./Direction";
import { Room } from "./Room";

export class Game {
  constructor(private currentRoom: Room) {}

  current = (): Room => {
    return this.currentRoom;
  };

  move(direction: Direction): Room {
    this.currentRoom = this.currentRoom.getConnection(direction);
    return this.currentRoom;
  }

  addRoom(title: string, description: string): Room {
    return new Room(title, description);
  }
}
