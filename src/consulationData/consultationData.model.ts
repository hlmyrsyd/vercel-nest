import { ConsultationHistory } from "src/consultationHistory/consultationHistory.model";

export class ConsultationData {
    id: string;
    consultationId: string;
    date: string;
    activity: string[];
    fnbIntake: string[];
    lastMed: string[];
    opinion: string[];
    anxiety: string[];
    pain: string[];
    consultation: ConsultationHistory;
}
