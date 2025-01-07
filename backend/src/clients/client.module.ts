import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './providers/clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
  imports: [TypeOrmModule.forFeature([Client])],
})
export class ClientModule {}
