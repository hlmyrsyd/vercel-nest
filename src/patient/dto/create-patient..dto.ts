// src/patient/dto/create-patient.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePatientDto {
    @ApiProperty({ description: 'The name of the patient', example: 'John Doe' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'The gender of the patient', example: 'Male' })
    @IsString()
    @IsNotEmpty()
    gender: string;

    @ApiProperty({ description: 'The date of birth of the patient', example: '1990-01-01' })
    @IsString()
    @IsNotEmpty()
    dob: string;

    @ApiProperty({ description: 'The age of the patient', example: 32 })
    @IsNumber()
    age: number;

    @ApiProperty({ description: 'The status of the patient', example: 'Active' })
    @IsString()
    status: string;

    @ApiProperty({ description: 'The name of the guardian', example: 'Jane Doe', required: false })
    @IsOptional()
    @IsString()
    guardianName?: string;

    @ApiProperty({ description: 'The gender of the guardian', example: 'Female', required: false })
    @IsOptional()
    @IsString()
    guardianGender?: string;

    @ApiProperty({ description: 'The age of the guardian', example: 45, required: false })
    @IsOptional()
    @IsNumber()
    guardianAge?: number;

    @ApiProperty({ description: 'The status of the guardian', example: 'Active', required: false })
    @IsOptional()
    @IsString()
    guardianStatus?: string;
}
