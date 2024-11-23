// src/consultation-history/consultation-history.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateConsultationHistoryDto } from './dto/create-consultationHistory.dto';

@Injectable()
export class ConsultationHistoryService {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateConsultationHistoryDto) {
        return this.prisma.consultationHistory.create({ data });
    }

    async findAll() {
        return this.prisma.consultationHistory.findMany();
    }

    async findByPatientId(patientId: string) {
        return this.prisma.consultationHistory.findMany({
        where: { patientId },
        });
    }

    async deleteConsultationHistory(id: string) {
        try {
            await this.prisma.consultationData.deleteMany({
                where: { consultationId: id },
            });
        
            return this.prisma.consultationHistory.delete({
                where: { id },
            });
            } catch (error) {
            throw new Error(`Failed to delete consultation history with ID ${id}: ${error.message}`);
            }
        } 
}
