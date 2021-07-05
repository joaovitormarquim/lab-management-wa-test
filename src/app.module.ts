import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociationsModule } from './associations/associations.module';
import { ExamsModule } from './exams/exams.module';
import { LabsModule } from './labs/labs.module';
import * as ormconfig from './ormconfig';
@Module({
  imports: [
    LabsModule,
    ExamsModule,
    AssociationsModule,
    TypeOrmModule.forRoot(ormconfig),
  ],
})
export class AppModule {}
