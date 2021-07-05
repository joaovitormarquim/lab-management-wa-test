import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamsModule } from './exams/exams.module';
import { LabsModule } from './labs/labs.module';
import * as ormconfig from './ormconfig';
@Module({
  imports: [LabsModule, ExamsModule, TypeOrmModule.forRoot(ormconfig)],
})
export class AppModule {}
