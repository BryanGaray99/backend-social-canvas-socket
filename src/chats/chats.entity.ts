import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/users.entity';
import { Room } from 'src/rooms/rooms.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id_chat: number;

  @Column()
  message: string;

  @ManyToOne(() => User, user => user.chats)
  user: User;

  @ManyToOne(() => Room, room => room.chats)
  room: Room;
}
