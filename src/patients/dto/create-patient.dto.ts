import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsOptional, IsArray, IsDateString } from 'class-validator';

export class CreatePatientDto {
    @ApiProperty({ example: 'John Doe', description: 'The name of the patient.', required: true })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: 'Male', description: 'The gender of the patient.', required: true })
    @IsNotEmpty()
    @IsString()
    gender: string;

    @ApiProperty({ example: '1992-05-12', description: 'The date of birth of the patient.', required: true })
    @IsNotEmpty()
    @IsDateString()
    dob: string;

    @ApiProperty({ example: 30, description: 'The age of the patient.', required: true })
    @IsNotEmpty()
    @IsInt()
    age: number;

    @ApiProperty({ example: 'Single', description: 'The marital status of the patient.', required: true })
    @IsNotEmpty()
    @IsString()
    status: string;

    @ApiProperty({ example: 70, description: 'The weight of the patient (optional).' })
    @IsOptional()
    @IsInt()
    weight?: number;

    @ApiProperty({ example: 175, description: 'The height of the patient (optional).' })
    @IsOptional()
    @IsInt()
    height?: number;

    @ApiProperty({
        example: ['Diabetes', 'Hypertension'],
        description: 'A list of diseases the patient has a history of (optional).',
    })
    @IsOptional()
    @IsArray()
    diseaseHistory?: string[];

    @ApiProperty({
        example: ['Farmer', 'Factory worker'],
        description: 'A list of labor history of the patient (optional).',
    })
    @IsOptional()
    @IsArray()
    laborHistory?: string[];

    @ApiProperty({
        example: ['Breastfeeding complications'],
        description: 'A list of breastfeeding history for the patient (optional).',
    })
    @IsOptional()
    @IsArray()
    breastfeedHistory?: string[];

    @ApiProperty({ example: 'Jane Doe', description: 'The guardian’s name (optional).' })
    @IsOptional()
    @IsString()
    guardianName?: string;

    @ApiProperty({ example: 'Female', description: 'The gender of the guardian (optional).' })
    @IsOptional()
    @IsString()
    guardianGender?: string;

    @ApiProperty({ example: 40, description: 'The age of the guardian (optional).' })
    @IsOptional()
    @IsInt()
    guardianAge?: number;

    @ApiProperty({ example: 'Married', description: 'The marital status of the guardian (optional).' })
    @IsOptional()
    @IsString()
    guardianStatus?: string;
}
