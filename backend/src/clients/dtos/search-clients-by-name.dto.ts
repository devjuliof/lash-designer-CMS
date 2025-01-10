import { IsNotEmpty, IsString } from 'class-validator';

export class SearchClientsByNameDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
