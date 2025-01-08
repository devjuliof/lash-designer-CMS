import {
  Body,
  Controller,
  Delete,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateClientDto } from './dtos/create-client.dto';
import { ClientService } from './providers/clients.service';
import { CreateAnamnesisFormDto } from './dtos/create-anamnesis-form.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  public create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.createClient(createClientDto);
  }

  @Delete()
  public delete(@Query('id', ParseIntPipe) id: number) {
    return this.clientService.deleteClient(id);
  }

  @Post('anamnesis-form')
  public createAnamnesisForm(
    @Body() createAnamnesisFormDto: CreateAnamnesisFormDto,
  ) {
    return this.clientService.createAnamnesisForm(createAnamnesisFormDto);
  }
}
