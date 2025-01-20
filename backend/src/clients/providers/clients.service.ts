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
import { UpdateAnamnesisFormDto } from '../dtos/update-anamnesis-form.dto';
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

    newClient.anamnesisForm = new AnamnesisForm();

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

  public async updateAnamnesisForm(
    createAnamnesisFormDto: Partial<UpdateAnamnesisFormDto>,
  ) {
    let clientId = createAnamnesisFormDto.clientId;
    let anamnesisForm = undefined;
  
    try {
      anamnesisForm = await this.anamnesisFormRepository.findOne({
        where: { client: { id: clientId } },
        relations: ['client'],
      });
  
      if (!anamnesisForm) {
        throw new NotFoundException('Anamnesis form not found for the client');
      }
  
      Object.assign(anamnesisForm, createAnamnesisFormDto);

      await this.anamnesisFormRepository.save(anamnesisForm);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error updating anamnesis form: ${error.message}`,
      );
    }
  
    return anamnesisForm;
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
    } catch (error) {
      throw new Error(`Unable to find the client: ${error.message}`);
    }

    return client;
  }

  public async updateClientById(
    id: number,
    newClientData: Partial<CreateClientDto>,
  ) {
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

  public async getClientAnamnesisFormByClientId(clientId: number) {
    let anamnesisForm = undefined;

    try {
      anamnesisForm = await this.anamnesisFormRepository.findOne({
        where: {
          client: { id: clientId },
        },
      });

      if (!anamnesisForm) {
        throw new NotFoundException(
          `Client with Id ${clientId} does not have a form`,
        );
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
    }

    return anamnesisForm;
  }
}
