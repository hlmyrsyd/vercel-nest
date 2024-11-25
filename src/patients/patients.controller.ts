import { Body, Controller, Delete, Get, Param, Post, Put, BadRequestException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './patient.model';

@ApiTags('patients')
@Controller('patients')
export class PatientsController {
    private patients: Patient[] = [];

    @ApiOperation({ summary: 'Retrieve all patients' })
    @ApiResponse({
        status: 200,
        description: 'List of all patients',
        type: Patient,
        isArray: true,
    })
    @Get()
    findAll() {
        return this.patients;
    }

    @ApiOperation({ summary: 'Create a new patient' })
    @ApiResponse({
        status: 201,
        description: 'The patient has been successfully created.',
        type: Patient,
    })
    @ApiResponse({ status: 400, description: 'Invalid input.' })
    @Post()
    create(@Body() createPatientDto: CreatePatientDto) {
        const newPatient = {
            ...createPatientDto,
            id: crypto.randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
            consultations: [],
        } as Patient;
    
        this.patients.push(newPatient);
        return newPatient;
    }

    @ApiOperation({ summary: 'Update an existing patient' })
    @ApiResponse({
        status: 200,
        description: 'The patient has been successfully updated.',
        type: Patient,
    })
    @ApiResponse({ status: 404, description: 'Patient not found.' })
    @Put(':id')
    update(@Param('id') id: string, @Body() patient: Partial<Patient>) {
        const index = this.patients.findIndex((p) => p.id === id);
            if (index === -1) {
            throw new BadRequestException(`Patient with ID ${id} not found.`);
        }

        this.patients[index] = {
            ...this.patients[index],
            ...patient,
            updatedAt: new Date(),
        };
        return this.patients[index];
    }

    @ApiOperation({ summary: 'Remove a patient' })
    @ApiResponse({
        status: 200,
        description: 'The patient has been successfully removed.',
    })
    @ApiResponse({ status: 404, description: 'Patient not found.' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        const index = this.patients.findIndex((p) => p.id === id);
        if (index === -1) {
            throw new BadRequestException(`Patient with ID ${id} not found.`);
        }
        const removed = this.patients.splice(index, 1);
        return { message: 'Patient removed', removed };
    }
}
