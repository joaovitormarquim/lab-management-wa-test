import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabsModule } from './labs/labs.module';
import * as ormconfig from './ormconfig';
@Module({
  imports: [LabsModule, TypeOrmModule.forRoot(ormconfig)],
})
export class AppModule {}
