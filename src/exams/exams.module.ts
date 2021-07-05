import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamsController } from './exams.controller';
import { ExamsRepository } from './exams.repository';
import { ExamsService } from './exams.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExamsRepository])],
  controllers: [ExamsController],
  providers: [ExamsService],
})
export class ExamsModule {}
