// chats.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './chats.entity';
import { ChatDto } from './chats.dto';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Chat)
    private chatRepository: Repository<Chat>,
  ) {}

  async createChat(chatDto: ChatDto): Promise<Chat> {
    const chat = this.chatRepository.create(chatDto);
    return this.chatRepository.save(chat);
  }

  async findChatsByRoomId(id_room: number): Promise<Chat[]> {
    return this.chatRepository.find({ where: { room: { id_room } } });
  }
}
