import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreateClientDto } from '../dtos/create-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from '../entities/client.entity';
import { ILike, Repository } from 'typeorm';
import { CreateAnamnesisFormDto } from '../dtos/create-anamnesis-form.dto';
import { AnamnesisForm } from '../entities/anamnesis-form.entity';
import { PaginationQueryDto } from 'src/shared/pagination/dtos/pagination-query.dto';
import { PaginationProvider } from 'src/shared/pagination/providers/pagination.provider';
import { SearchClientsByNameDto } from '../dtos/search-clients-by-name.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,

    @InjectRepository(AnamnesisForm)
    private readonly anamnesisFormRepository: Repository<AnamnesisForm>,

    private readonly paginationProvider: PaginationProvider,
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

    const response = {
      created: true,
      client: newClient,
    };
    return response;
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

  public async createAnamnesisForm(
    createAnamnesisFormDto: CreateAnamnesisFormDto,
  ) {
    let client = undefined;

    try {
      client = await this.clientRepository.findOneBy({
        id: createAnamnesisFormDto.clientId,
      });

      if (!client) {
        throw new NotFoundException('Client not found');
      }
    } catch (error) {
      throw new InternalServerErrorException(
        `Error retrieving client: ${error.message}`,
      );
    }

    const newAnamnesisForm = this.anamnesisFormRepository.create(
      createAnamnesisFormDto,
    );

    client.anamnesisForm = newAnamnesisForm;

    try {
      await this.anamnesisFormRepository.save(newAnamnesisForm);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error saving anamnesis form: ${error.message}`,
      );
    }

    try {
      await this.clientRepository.save(client);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error updating client with anamnesis form: ${error.message}`,
      );
    }

    return newAnamnesisForm;
  }

  public async getAllClients(paginationQueryDto: PaginationQueryDto) {
    return await this.paginationProvider.paginateQuery(
      paginationQueryDto,
      this.clientRepository,
    );
  }

  public async searchClientsByName(
    searchClientsByNameDto: SearchClientsByNameDto,
    paginationQueryDto: PaginationQueryDto,
  ) {
    let results = undefined;

    try {
      results = await this.paginationProvider.paginateQuery(
        paginationQueryDto,
        this.clientRepository,
        {
          name: ILike(`${searchClientsByNameDto.name.toLowerCase()}%`),
        },
      );
    } catch (error) {
      throw new InternalServerErrorException(
        'An unexpected error occurred. Please try again later.',
      );
    }

    return results;
  }

  public async getClientById(id: number) {
    let client = undefined;
    try {
      client = await this.clientRepository.findOneBy({ id });

      if (!client) {
        throw new BadRequestException(`Client with ID ${id} not found.`);
      }
    } catch(error) {
      throw new Error(`Unable to find the client: ${error.message}`);
    }
    
    return client;
  }

  public async updateClientById(id: number, newClientData: Partial<CreateClientDto>) {
    newClientData = this.clientRepository.create(newClientData);

    try {
      const result = await this.clientRepository.update({ id }, newClientData);
      
      if (result.affected === 0) {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }
    } catch (error) {
      throw new NotFoundException('Failed to update client');
    }

    return { updated: true };
  }
}
