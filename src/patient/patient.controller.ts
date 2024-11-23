import { Controller, Get, Post, Param, Body, Put, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from './patient.model';
import { Prisma } from '@prisma/client';
import { CreatePatientDto } from './dto/create-patient..dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('patients')
@ApiTags('patients')
export class PatientController {
    constructor(private readonly patientService: PatientService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new patient' })
    @ApiResponse({ status: 201, description: 'Patient created successfully.' })
    async createPatient(@Body() createPatientDto: CreatePatientDto) {
        try {
            return await this.patientService.createPatient(createPatientDto);
        } catch (error) {
            throw new BadRequestException('Invalid patient data');
        }
    }

    @Get()
    @ApiOperation({ summary: 'Get all patients Data' })
    @ApiResponse({ status: 201, description: 'All patients data retrieved successfully.' })
    async getPatients(): Promise<Patient[]> {
        return this.patientService.getPatients();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get patient by ID' })
    @ApiResponse({ status: 201, description: 'Patients retrieved successfully.' })
    async getPatientById(@Param('id') id: string): Promise<Patient | null> {
        const patient = await this.patientService.getPatientById(id);
        if (!patient) {
            throw new NotFoundException('Patient not found');
        }
        return patient;
    }

    @Put(':id')
    @ApiOperation({ summary: 'Edit patient by ID' })
    @ApiResponse({ status: 201, description: 'Edit Patients successfully.' })
    async updatePatient(
        @Param('id') id: string,
        @Body() data: Prisma.PatientUpdateInput
    ): Promise<Patient> {
        return this.patientService.updatePatient(id, data);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete patient by ID' })
    @ApiResponse({ status: 201, description: 'Patients successfully deleted.' })
    async deletePatient(@Param('id') id: string): Promise<Patient> {
        return this.patientService.deletePatient(id);
    }
}
