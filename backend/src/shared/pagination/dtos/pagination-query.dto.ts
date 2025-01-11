import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @IsInt()
  limit?: number = 10;

  @IsOptional()
  @IsPositive()
  @IsInt()
  page?: number = 1;
}
