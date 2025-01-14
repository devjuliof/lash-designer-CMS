import { Injectable } from '@nestjs/common';
import { AddRevenueDto } from './../dtos/revenue.dto';
import { MoreThan, Repository } from 'typeorm';
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

    const rawRevenueResults = await this.revenueRepository
      .createQueryBuilder('revenue')
      .select('EXTRACT(YEAR from date)', 'year')
      .addSelect('SUM(revenue.value)', 'total_revenue')
      .addSelect(this.generateMonthlyRevenueSelects())
      .groupBy('EXTRACT(YEAR FROM date)')
      .getRawMany();

    const months = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december',
    ];

    const revenuePerYear = rawRevenueResults.map((result) => {
      const year = result.year;
      const totalRevenue = result.total_revenue;

      const revenuePerMonth = months.reduce((acc, month) => {
        acc[`${month}Revenue`] = result[`${month}_revenue`];
        return acc;
      }, {});

      return {
        year,
        totalRevenue,
        revenuePerMonth,
      };
    });

    const results = {
      revenuesPerDays: {
        revenueSinceSevenDays,
        revenueSinceFifteenDays,
        revenueSinceThirtyDays,
      },
      revenuePerYear,
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

  private generateMonthlyRevenueSelects() {
    const months = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december',
    ];

    return months
      .map(
        (month, index) =>
          `SUM(CASE WHEN EXTRACT(MONTH FROM date) = ${index + 1} THEN value ELSE 0 END) AS ${month}_revenue`,
      )
      .join(', ');
  }
}
