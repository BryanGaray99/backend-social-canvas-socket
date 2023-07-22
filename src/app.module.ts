import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsModule } from './rooms/rooms.module';
import { ChatsModule } from './chats/chats.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { Chat } from './chats/chats.entity';
import { Room } from './rooms/rooms.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'buser99',
      database: 'DB_SOCIAL_CANVAS',
      entities: [
        User,
        Chat,
        Room
      ],
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    RoomsModule,
    ChatsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
