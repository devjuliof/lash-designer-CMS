import { IsDate, IsNotEmpty, IsNumber, IsPositive } from "class-validator";


export class AddRevenueDto {
  @IsPositive()
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  value: number;

  @IsDate()
  @IsNotEmpty()
  date: Date;
}