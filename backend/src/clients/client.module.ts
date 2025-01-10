import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './providers/clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { AnamnesisForm } from './entities/anamnesis-form.entity';
import { PaginationModule } from 'src/shared/pagination/pagination.module';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
  imports: [
    PaginationModule,
    TypeOrmModule.forFeature([Client, AnamnesisForm]),
  ],
})
export class ClientModule {}
