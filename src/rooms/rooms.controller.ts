// rooms.controller.ts
import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomDto } from './rooms.dto';
import { Room } from './rooms.entity';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Post()
  createRoom(@Body() roomDto: RoomDto): Promise<Room> {
    return this.roomsService.createRoom(roomDto);
  }

  @Put(':id_room/add-user/:id_user')
  addUserToRoom(
    @Param('id_room') id_room: number,
    @Param('id_user') id_user: number,
  ): Promise<Room> {
    return this.roomsService.addUserToRoom(id_room, id_user);
  }

  @Get('user/:id_user')
  findRoomsByUserId(@Param('id_user') id_user: number): Promise<Room[]> {
    return this.roomsService.findRoomsByUserId(id_user);
  }
}
