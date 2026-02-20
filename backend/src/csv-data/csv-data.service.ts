import { HttpException, Injectable } from '@nestjs/common';
import { parse } from 'csv-parse';

@Injectable()
export class CsvDataService {
  async parseCsv(buffer: Buffer) {
    if (!buffer || buffer.length === 0) {
      throw new HttpException('No file uploaded or file is empty', 400);
    }

    const csvString = buffer.toString('utf-8');
    const columns = csvString
      .split('\n')[0]
      .split(',')
      .map((col) => col.trim());

    const data = new Promise((resolve, reject) => {
      parse(
        csvString,
        {
          columns: true,
          skip_empty_lines: true,
          trim: true,
        },
        (err, records) => {
          if (err) return reject(err);
          resolve(records);
        },
      );
    });

    return {
      message: 'CSV file parsed successfully',
      columns,
      data: await data,
    };
  }
}
