import { Module } from '@nestjs/common';
import { CsvDataController } from './csv-data.controller';
import { CsvDataService } from './csv-data.service';

@Module({
  controllers: [CsvDataController],
  providers: [CsvDataService]
})
export class CsvDataModule {}
