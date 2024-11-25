export class Patient {
    id: string;
    name: string;
    gender: string;
    dob: string;
    age: number;
    status: string;
    weight?: number;
    height?: number;
    diseaseHistory: string[];
    laborHistory: string[];
    breastfeedHistory: string[];
    guardianName?: string;
    guardianGender?: string;
    guardianAge?: number;
    guardianStatus?: string;
    createdAt: Date;
    updatedAt: Date;
    consultations: any[];
}
