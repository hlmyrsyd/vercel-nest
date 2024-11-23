// src/consultation-data/consultation-data.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ConsultationDataController } from './consultationData.controller';
import { ConsultationDataService } from './consultationData.service';

@Module({
    controllers: [ConsultationDataController],
    providers: [ConsultationDataService, PrismaService],
})
export class ConsultationDataModule {}
