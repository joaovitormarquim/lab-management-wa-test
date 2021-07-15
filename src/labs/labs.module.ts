import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabsController } from './labs.controller';
import { LabsRepository } from './labs.repository';
import { LabsService } from './labs.service';

@Module({
  imports: [TypeOrmModule.forFeature([LabsRepository]), HttpModule],
  controllers: [LabsController],
  providers: [LabsService],
})
export class LabsModule {}
