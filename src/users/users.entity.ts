import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Chat } from 'src/chats/chats.entity';
import { Room } from 'src/rooms/rooms.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  telephone: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @OneToMany(() => Chat, chat => chat.user)
  chats: Chat[];

  @OneToMany(() => Room, room => room.user)
  rooms: Room[];
}
