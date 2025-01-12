import { Body, Controller, Get, Post } from '@nestjs/common';
import { RevenueService } from './providers/revenue.service';
import { AddRevenueDto } from './dtos/revenue.dto';

@Controller('revenue')
export class RevenueController {
  constructor(private readonly revenueService: RevenueService) {}

  @Post()
  public addRevenue(@Body() addRevenueDto: AddRevenueDto) {
    return this.revenueService.addRevenue(addRevenueDto);
  }

  @Get()
  public getRevenueData() {
    return this.revenueService.getRevenueData();
  }
}
