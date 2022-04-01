import { Direction } from "./Direction";
import { Room } from "./Room";

export class Game {
  private titles: Array<string> =[];
  constructor(private currentRoom: Room) {}

  current = (): Room => {
    return this.currentRoom;
  };

  move(direction: Direction): Room {
    this.currentRoom = this.currentRoom.getConnection(direction);
    return this.currentRoom;
  }

  addRoom(title: string, description: string): Room {
    if(this.titles.some(t => t === title)){
      throw Error('room exists');
    }
    this.titles.push(title)
    return new Room(title, description);
  }

  look(direction: Direction):string {
    return this.currentRoom.getConnection(direction).description
  }
}
