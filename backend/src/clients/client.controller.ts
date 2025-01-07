import { Body, Controller, Post } from '@nestjs/common';
import { CreateClientDto } from './dtos/create-client.dto';
import { ClientService } from './providers/clients.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  public create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.createClient(createClientDto);
  }
}
