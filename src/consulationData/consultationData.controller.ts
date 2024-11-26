import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ConsultationData } from './consultationData.model';
import { CreateConsultationDataDto } from './dto/create-consultationData.dto';

@ApiTags('consultation-data')
@Controller('consultation-data')
export class ConsultationDataController {
    private consultationData: ConsultationData[] = [];

    @ApiOperation({ summary: 'Get all consultation data' })
    @ApiResponse({ status: 200, description: 'List of consultation data.', type: ConsultationData, isArray: true })
    @Get()
    findAll() {
        return this.consultationData;
    }

    @ApiOperation({ summary: 'Create a new consultation data record' })
    @ApiResponse({ status: 201, description: 'Consultation data created.', type: ConsultationData })
    @Post()
    create(@Body() createConsultationDataDto: CreateConsultationDataDto) {
        const newConsultationData: ConsultationData = {
        id: crypto.randomUUID(),
        ...createConsultationDataDto
        };
        this.consultationData.push(newConsultationData);
        return newConsultationData;
    }

    @ApiOperation({ summary: 'Get consultation data by ID' })
    @ApiResponse({ status: 200, description: 'Consultation data found.', type: ConsultationData })
    @Get(':consultationHistoryId')
    findByConsultationHistoryId(@Param('consultationHistoryId') consultationHistoryId: string) {
        const data = this.consultationData.filter(
            ( data) => data.consultationId === consultationHistoryId,
        );
        if (data.length === 0) {
            return {
            message: `No consultation data found for Consultation History ID ${consultationHistoryId}.`,
            };
        }
        return data;
    }

    @ApiOperation({ summary: 'Update consultation data by ID' })
    @ApiResponse({ status: 200, description: 'Consultation data updated.', type: ConsultationData })
    @Put(':consultationHistoryId')
    update(@Param('consultationHistoryId') consultationHistoryId: string, @Body() updateDto: Partial<CreateConsultationDataDto>) {
        const index = this.consultationData.findIndex(
            (data) => data.consultationId === consultationHistoryId);
        if (index === -1) {
            return { message: `Consultation data with ID ${consultationHistoryId} not found.` };
        }

        this.consultationData[index] = {
            ...this.consultationData[index],
            ...updateDto,
        };

        return this.consultationData[index];
    }

    @ApiOperation({ summary: 'Delete consultation data by ID' })
    @ApiResponse({ status: 200, description: 'Consultation data deleted.' })
    @Delete(':consultationHistoryId')
    delete(@Param('consultationHistoryId') consultationHistoryId: string) {
        const index = this.consultationData.findIndex(
            (data) => data.consultationId === consultationHistoryId);
        if (index === -1) {
            return { message: `Consultation data with ID ${consultationHistoryId} not found.` };
        }

        const deletedData = this.consultationData.splice(index, 1);
        return {
            message: `Consultation data with ID ${consultationHistoryId} deleted successfully.`,
            deletedData: deletedData[0],
        };
    }
}
