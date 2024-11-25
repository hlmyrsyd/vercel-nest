import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// Mock data structure for a Patient
class Patient {
    id: number;
    name: string;
    age: number;
    condition: string;
}

@ApiTags('patients') // Swagger tag
@Controller('patients')
export class PatientsController {
    private patients: Patient[] = [
        { id: 1, name: 'John Doe', age: 30, condition: 'Flu' },
        { id: 2, name: 'Jane Doe', age: 25, condition: 'Cold' },
    ];

    @Get()
    findAll() {
        return this.patients;
    }

    @Post()
    create(@Body() patient: Patient) {
        const newPatient = { ...patient, id: this.patients.length + 1 };
        this.patients.push(newPatient);
        return newPatient;
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() patient: Partial<Patient>) {
        const index = this.patients.findIndex((p) => p.id === +id);
        if (index === -1) {
        return { message: `Patient with ID ${id} not found.` };
        }
        this.patients[index] = { ...this.patients[index], ...patient };
        return this.patients[index];
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        const index = this.patients.findIndex((p) => p.id === +id);
        if (index === -1) {
        return { message: `Patient with ID ${id} not found.` };
        }
        const removed = this.patients.splice(index, 1);
        return { message: 'Patient removed', removed };
    }
}
