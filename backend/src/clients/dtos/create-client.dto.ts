import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @IsString()
  @MinLength(3)
  @MaxLength(96)
  @IsNotEmpty()
  name: string;

  @IsDate()
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  aniversario: Date;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\+351[1-9][0-9]{8}$/, {
    message: 'Telefone must be a valid Portuguese phone number',
  })
  telefone: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MinLength(3)
  @MaxLength(96)
  email: string;
}
