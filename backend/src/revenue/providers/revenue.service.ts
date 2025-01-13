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

    let response;
    try {
      response = await this.revenueRepository.save(revenue);
    } catch (error) {
      throw new Error('Failed to save revenue.');
    }

    return response;
  }

  public async getRevenueData() {
    const revenueSinceSevenDays = await this.getRevenueSinceDays(7);

    const revenueSinceFifteenDays = await this.getRevenueSinceDays(15);

    const revenueSinceThirtyDays = await this.getRevenueSinceDays(30);

    const rawRevenueMonthlyResults = await this.revenueRepository
      .createQueryBuilder('revenue')
      .select("TO_CHAR(revenue.date, 'Month')", 'month')
      .addSelect('SUM(revenue.value)', 'total')
      .groupBy("TO_CHAR(revenue.date, 'Month')")
      .orderBy('MIN(revenue.date)', 'ASC')
      .getRawMany();

    const monthlyRevenue = rawRevenueMonthlyResults.reduce((acc, item) => {
      const month = item.month.toLowerCase().trim();
      acc[month] = parseFloat(item.total);
      return acc;
    }, {});

    const results = {
      revenuesPerDays: {
        revenueSinceSevenDays,
        revenueSinceFifteenDays,
        revenueSinceThirtyDays,
      },
      monthlyRevenue,
      // I still need divide by year
    };

    return results;
  }

  private async getRevenueSinceDays(days: number) {
    const dateLessDays = new Date();
    dateLessDays.setDate(dateLessDays.getDate() - days);

    const results = await this.revenueRepository.find({
      select: {
        value: true,
      },
      where: {
        date: MoreThan(dateLessDays),
      },
    });

    const total = results.reduce(
      (sum, record) => sum + Number(record.value),
      0,
    );

    const formattedTotal = total.toFixed(2);

    return formattedTotal;
  }
}
