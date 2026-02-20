import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CsvDataService } from './csv-data.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('csv')
export class CsvDataController {
  constructor(private readonly csvDataService: CsvDataService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCsv(@UploadedFile() file: Express.Multer.File) {
    return this.csvDataService.parseCsv(file.buffer);
  }
}
