import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamsRepository } from 'src/exams/exams.repository';
import { LabsRepository } from 'src/labs/labs.repository';
import { AssociationsController } from './associations.controller';
import { AssociationsRepository } from './associations.repository';
import { AssociationsService } from './associations.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AssociationsRepository,
      LabsRepository,
      ExamsRepository,
    ]),
  ],
  controllers: [AssociationsController],
  providers: [AssociationsService],
})
export class AssociationsModule {}
