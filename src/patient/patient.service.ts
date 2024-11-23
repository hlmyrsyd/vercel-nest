import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Patient } from './patient.model';
import { Prisma } from '@prisma/client';
import { CreatePatientDto } from './dto/create-patient..dto';

@Injectable()
export class PatientService {
    constructor(private readonly prisma: PrismaService) {}

    async createPatient(data: CreatePatientDto) {
        try {
            return await this.prisma.patient.create({ data });
        } catch (error) {
            console.error("Create Patient Error:", error);
            throw new BadRequestException("Invalid patient data");
        }
    }

    async getPatients(): Promise<Patient[]> {
        return this.prisma.patient.findMany();
    }

    async getPatientById(id: string): Promise<any | null> {
        return this.prisma.patient.findUnique({
            where: { id },
            include: {
                consultations: {
                    include: {
                        consultationData: true,
                    },
                },
            },
        });
    }

    async updatePatient(id: string, data: Prisma.PatientUpdateInput): Promise<Patient> {
        return this.prisma.patient.update({
        where: { id },
        data
        });
    }

    async deletePatient(id: string): Promise<Patient> {
        return this.prisma.patient.delete({
            where: { id }
        });
    }
}
