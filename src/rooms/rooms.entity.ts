import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Chat } from 'src/chats/chats.entity';
import { User } from 'src/users/users.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id_room: number;

  @Column({ default: 'Sala de chat' })
  description: string;

  // Relación con la entidad Chat (uno a muchos)
  @OneToMany(() => Chat, chat => chat.room)
  chats: Chat[];

  // Relación con la entidad User (muchos a uno)
  @ManyToOne(() => User, user => user.rooms) 
  user: User;
}
