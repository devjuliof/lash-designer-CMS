import { Injectable } from '@nestjs/common';
import { CreateClientDto } from '../dtos/create-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from '../entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}
  public async createClient(createClientDto: CreateClientDto) {
    const newClient = this.clientRepository.create(createClientDto);
    return await this.clientRepository.save(newClient);
  }
}
