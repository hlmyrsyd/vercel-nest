import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConsultationDataService } from './consultationData.service';
import { CreateConsultationDataDto } from './dto/create-consultationData.dto';

@Controller('consultation-data')
@ApiTags('consultation-data')
export class ConsultationDataController {
    constructor(private readonly consultationDataService: ConsultationDataService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new consultation data entry' })
    @ApiResponse({ status: 201, description: 'Consultation data created successfully.' })
    create(@Body() createConsultationDataDto: CreateConsultationDataDto) {
        return this.consultationDataService.create(createConsultationDataDto);
    }

    @Get(':consultationId')
    @ApiOperation({ summary: 'Get consultation data by consultation ID' })
    findByConsultationId(@Param('consultationId') consultationId: string) {
        return this.consultationDataService.findByConsultationId(consultationId);
    }

    @Put(':consultationId')
    @ApiOperation({ summary: 'Update consultation data by consultation ID' })
    @ApiResponse({ status: 200, description: 'Consultation data updated successfully.' })
    update(
        @Param('consultationId') consultationId: string,
        @Body() updateFields: Partial<CreateConsultationDataDto>,
    ) {
        return this.consultationDataService.update(consultationId, updateFields);
    }
}
