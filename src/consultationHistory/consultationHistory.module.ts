import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ConsultationHistoryController } from './consultationHistory.controller';
import { ConsultationHistoryService } from './consultationHistory.service';

@Module({
    controllers: [ConsultationHistoryController],
    providers: [ConsultationHistoryService, PrismaService],
})
export class ConsultationHistoryModule {}
