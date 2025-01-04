import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientService } from './providers/client.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientService]
})
export class ClientsModule {}
