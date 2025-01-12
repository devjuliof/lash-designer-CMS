import { Injectable } from '@nestjs/common';
import { AddRevenueDto } from './../dtos/revenue.dto';
import { LessThan, MoreThan, Repository, TreeLevelColumn } from 'typeorm';
import { Revenue } from '../entities/revenue.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RevenueService {
  constructor(
    @InjectRepository(Revenue)
    private readonly revenueRepository: Repository<Revenue>,
  ) {}

  public async addRevenue(addRevenueDto: AddRevenueDto) {

    const revenue = this.revenueRepository.create(addRevenueDto);

    return await this.revenueRepository.save(revenue);
  }

  public async getRevenueData() {
    
    const revenueSinceSevenDays = await this.getRevenueSinceDays(7);
    
    const revenueSinceFifteenDays = await this.getRevenueSinceDays(15);

    const revenueSinceThirtyDays = await this.getRevenueSinceDays(30);

    const results = {
      revenuesPerDays: {
        revenueSinceSevenDays,
        revenueSinceFifteenDays,
        revenueSinceThirtyDays
      },
      revenuesMonthly: {
        // I still need work here
      }
    }

    return results;
  }

  private async getRevenueSinceDays(days: number) {
    const date = new Date()

    date.setHours(date.getHours() - (days * 24));

    const dateLessDays = date;

    const results = await this.revenueRepository.find({
      select: {
        value: true,
      },
      where: {
        date: MoreThan(dateLessDays)
      }
    })

    const total = results.reduce((sum, record) => sum + Number(record.value), 0);

    return total;
  }
}
