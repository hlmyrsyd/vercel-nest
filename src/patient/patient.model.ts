import { Prisma } from "@prisma/client";

export class Patient implements Prisma.PatientCreateInput {
    id: string;
    name: string;
    gender: string;
    dob: string;
    age: number;
    status: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
    weight?: number;
    height?: number;
    diseaseHistory?: string[] | Prisma.PatientCreatediseaseHistoryInput;
    laborHistory?: string[] | Prisma.PatientCreatelaborHistoryInput;
    breastfeedHistory?: string[] | Prisma.PatientCreatebreastfeedHistoryInput;
    guardianName: string;
    guardianGender: string;
    guardianAge: number;
    guardianStatus: string;
    consultations?: Prisma.ConsultationHistoryCreateNestedManyWithoutPatientInput;
}