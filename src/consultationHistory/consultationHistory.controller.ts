import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ConsultationData } from 'src/consulationData/consultationData.model';
import { ConsultationHistory } from './consultationHistory.model';
import { CreateConsultationHistoryDto } from './dto/create-consultationHistory.dto';

@ApiTags('consultation-history')
@Controller('consultation-history')
export class ConsultationHistoryController {
    private consultationHistories: ConsultationHistory[] = [];
    private consultationData: ConsultationData[] = []; 

    @ApiOperation({ summary: 'Get all consultation histories' })
    @ApiResponse({
        status: 200,
        description: 'List of consultation histories.',
        type: ConsultationHistory,
        isArray: true,
    })
    @Get()
    findAll() {
        return this.consultationHistories.map((history) => ({
        ...history,
        consultationData: this.consultationData.filter(
            (data) => data.consultationId === history.id,
        ),
        }));
    }

    @ApiOperation({ summary: 'Create a new consultation history' })
    @ApiResponse({
        status: 201,
        description: 'Consultation history created.',
        type: ConsultationHistory,
    })
    @Post()
    create(@Body() createConsultationHistoryDto: CreateConsultationHistoryDto) {
        const newConsultationHistory: ConsultationHistory = {
        id: crypto.randomUUID(),
        ...createConsultationHistoryDto,
        consultationData: [],
        };
        this.consultationHistories.push(newConsultationHistory);
        return newConsultationHistory;
    }

    @ApiOperation({ summary: 'Get consultation history by Patient ID' })
    @ApiResponse({
        status: 200,
        description: 'Consultation history for a patient found.',
        type: ConsultationHistory,
        isArray: true,
    })
    @Get(':patientId')
    findByPatientId(@Param('patientId') patientId: string) {
    const consultations = this.consultationHistories
        .filter((history) => history.patientId === patientId)
        .map((history) => {
            const matchedData = this.consultationData.filter(
                (data) => data.consultationId === history.id,
            );
            console.log(`History ID: ${history.id}, Matched Data:`, matchedData);

            return {
                ...history,
                consultationData: matchedData,
            };
        });

    if (consultations.length === 0) {
        return { message: `No consultations found for patient ID ${patientId}.` };
    }
    return consultations;
}
}
