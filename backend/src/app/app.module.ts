import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

//modules
import { UsersModule } from 'src/users/users.module';
import { CsvDataModule } from 'src/csv-data/csv-data.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //tornar as variáveis de ambiente globais
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.DB_PASS,
      database: 'postgres',
      autoLoadEntities: true, //carrega entidades sem preicsar especificar cada uma
      synchronize: true, //sincroniza o banco de dados com as entidades, não usar em produção
    }),
    UsersModule,
    CsvDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
