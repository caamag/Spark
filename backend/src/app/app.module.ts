import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//modules
import { UsersModule } from 'src/users/users.module';
import { CsvDataModule } from 'src/csv-data/csv-data.module';

@Module({
  imports: [UsersModule, CsvDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
