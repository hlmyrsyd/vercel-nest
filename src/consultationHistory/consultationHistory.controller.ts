import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConsultationHistoryService } from './consultationHistory.service';
import { CreateConsultationHistoryDto } from './dto/create-consultationHistory.dto';

@Controller('consultation-history')
@ApiTags('consultation-history')
export class ConsultationHistoryController {
    constructor(private readonly consultationHistoryService: ConsultationHistoryService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new consultation history entry' })
    @ApiResponse({ status: 201, description: 'Consultation history created successfully.' })
    create(@Body() createConsultationHistoryDto: CreateConsultationHistoryDto) {
        return this.consultationHistoryService.create(createConsultationHistoryDto);
    }

    @Get(':patientId')
    @ApiOperation({ summary: 'Get consultation history by patient ID' })
    @ApiParam({ name: 'patientId', description: 'The ID of the patient' })
    findByPatientId(@Param('patientId') patientId: string) {
        return this.consultationHistoryService.findByPatientId(patientId);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete consultations by ID' })
    @ApiResponse({ status: 201, description: 'Consultation successfully deleted.' })
    async deleteConsultationHistory(@Param('id') id: string) {
        return this.consultationHistoryService.deleteConsultationHistory(id);
    }
}
