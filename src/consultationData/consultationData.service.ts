import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateConsultationDataDto } from './dto/create-consultationData.dto';

@Injectable()
export class ConsultationDataService {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateConsultationDataDto) {
        return this.prisma.consultationData.create({ data });
    }

    async findByConsultationId(consultationId: string) {
        return this.prisma.consultationData.findMany({
        where: { consultationId },
        });
    }

    async update(consultationId: string, updateFields: Partial<CreateConsultationDataDto>) {
        const currentData = await this.prisma.consultationData.findUnique({
            where: { consultationId },
        });
    
        if (!currentData) {
            throw new Error(`Consultation data with ID ${consultationId} not found.`);
        }
    
        if (updateFields.lastMed && Array.isArray(updateFields.lastMed)) {
            const newMedications = updateFields.lastMed.filter(
                (med) => !(currentData.lastMed || []).includes(med)
            );
            updateFields.lastMed = [...(currentData.lastMed || []), ...newMedications];
        }
    
        return this.prisma.consultationData.update({
            where: { consultationId },
            data: updateFields,
        });
    }    
}
