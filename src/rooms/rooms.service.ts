import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './rooms.entity';
import { RoomDto } from './rooms.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  async createRoom(roomDto: RoomDto): Promise<Room> {
    const room = this.roomRepository.create(roomDto);
    return this.roomRepository.save(room);
  }

  async addUserToRoom(id_room: number, id_user: number): Promise<Room> {
    const room = await this.roomRepository.findOneBy(id_room, { relations: ['user'] });
    if (!room) {
      throw new Error('Sala no encontrada');
    }

    // Aquí asumimos que existe una entidad User y el campo id_user en la tabla Users.
    // Reemplaza 'user' por el nombre correcto de la relación con la entidad User en la entidad Room.
    room.user = id_user;

    return this.roomRepository.save(room);
  }

  async findRoomsByUserId(id_user: number): Promise<Room[]> {
    return this.roomRepository.find({ where: { user: { id_user } }, relations: ['user'] });
  }
}
