// chats.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatDto } from './chats.dto';
import { Chat } from './chats.entity';

@Controller('chats')
export class ChatsController {
  constructor(private chatsService: ChatsService) {}

  @Post()
  createChat(@Body() chatDto: ChatDto): Promise<Chat> {
    return this.chatsService.createChat(chatDto);
  }

  @Get('room/:id_room')
  findChatsByRoomId(@Param('id_room') id_room: number): Promise<Chat[]> {
    return this.chatsService.findChatsByRoomId(id_room);
  }
}
