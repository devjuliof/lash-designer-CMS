import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateClientDto } from './dtos/create-client.dto';
import { ClientService } from './providers/clients.service';
import { CreateAnamnesisFormDto } from './dtos/create-anamnesis-form.dto';
import { PaginationQueryDto } from 'src/shared/pagination/dtos/pagination-query.dto';
import { SearchClientsByNameDto } from './dtos/search-clients-by-name.dto';

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

  @Get()
  public getAllClients(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.clientService.getAllClients(paginationQueryDto);
  }

  @Get('search-clients')
  public async searchClientsByName(
    @Query() searchClientsByNameDto: SearchClientsByNameDto,
    @Query() paginationQueryDto: PaginationQueryDto,
  ) {
    return this.clientService.searchClientsByName(
      searchClientsByNameDto,
      paginationQueryDto,
    );
  }

  @Get(':id')
  public async getClientById(@Param('id') id: number) {
    return this.clientService.getClientById(id);
  }
}
