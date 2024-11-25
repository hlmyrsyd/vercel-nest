import { ConsultationData } from 'src/consulationData/consultationData.model';

export class ConsultationHistory {
    id: string;
    date: string;
    patientId: string;
    consultationData: ConsultationData[];
}
