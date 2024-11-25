import { ConsultationDataController } from './consulationData/consultationData.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsController } from './patients/patients.controller';
import { ConsultationHistoryController } from './consultationHistory/consultationHistory.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    PatientsController,
    ConsultationDataController,
    ConsultationHistoryController
  ],
  providers: [AppService],
})

export class AppModule {}
