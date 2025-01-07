import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
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
    let newClient = this.clientRepository.create(createClientDto);

    try {
      newClient = await this.clientRepository.save(newClient);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: error,
        },
      );
    }

    return newClient;
  }

  public async deleteClient(id: number) {
    let response = undefined;

    try {
      response = await this.clientRepository.delete({ id });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: error,
        },
      );
    }

    if (response.affected === 0) {
      return {
        delete: false,
        message: `Client with ID ${id} not found`,
      };
    }

    return { deleted: true };
  }
}
