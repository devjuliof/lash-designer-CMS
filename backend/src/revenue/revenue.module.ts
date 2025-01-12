import { Module } from '@nestjs/common';
import { RevenueController } from './revenue.controller';
import { RevenueService } from './providers/revenue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenue } from './entities/revenue.entity';

@Module({
  controllers: [RevenueController],
  providers: [RevenueService],
  imports: [TypeOrmModule.forFeature([Revenue])]
})
export class RevenueModule {}
