import { Direction } from "./Direction";

export class Room {
  constructor(public title: string, public description: string) {}
  private connections: Record<Direction, Room> = {} as Record<Direction, Room>;

  addConnection(direction: Direction, room: Room) {
    this.connections[direction] = room;
  }

  getConnection(direction: Direction): Room {
    return this.connections[direction];
  }
}
