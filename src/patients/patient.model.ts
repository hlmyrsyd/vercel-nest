import { ApiProperty } from '@nestjs/swagger';

export class Patient {
    @ApiProperty({ example: 'f3f8e3f0-d1b8-435b-9e89-2cb4e8f39e6f', description: 'Unique ID of the patient.' })
    id: string;

    @ApiProperty({ example: 'John Doe', description: 'The name of the patient.', required: true })
    name: string;

    @ApiProperty({ example: 'Male', description: 'The gender of the patient.', required: true })
    gender: string;

    @ApiProperty({ example: '1992-05-12', description: 'The date of birth of the patient.', required: true })
    dob: string;

    @ApiProperty({ example: 31, description: 'The age of the patient.', required: true })
    age: number;

    @ApiProperty({ example: 'Single', description: 'The marital status of the patient.', required: true })
    status: string;

    @ApiProperty({ example: 70, description: 'The weight of the patient (optional).' })
    weight?: number;

    @ApiProperty({ example: 175, description: 'The height of the patient (optional).' })
    height?: number;

    @ApiProperty({
    example: ['Hypertension', 'Asthma'],
    description: 'A list of diseases the patient has a history of.',
    })
    diseaseHistory: string[];

    @ApiProperty({
    example: ['Factory worker'],
    description: 'A list of the patient’s labor history.',
    })
    laborHistory: string[];

    @ApiProperty({
    example: ['Breastfeeding complications'],
    description: 'A list of breastfeeding history for the patient.',
    })
    breastfeedHistory: string[];

    @ApiProperty({ example: 'Jane Doe', description: 'The name of the patient’s guardian (optional).' })
    guardianName?: string;

    @ApiProperty({ example: 'Female', description: 'The gender of the patient’s guardian (optional).' })
    guardianGender?: string;

    @ApiProperty({ example: 55, description: 'The age of the patient’s guardian (optional).' })
    guardianAge?: number;

    @ApiProperty({ example: 'Married', description: 'The marital status of the guardian (optional).' })
    guardianStatus?: string;

    @ApiProperty({ description: 'The date and time the patient was created.' })
    createdAt: Date;

    @ApiProperty({ description: 'The date and time the patient was last updated.' })
    updatedAt: Date;

    @ApiProperty({
    example: [],
    description: 'A list of consultation histories associated with the patient.',
    })
    consultations: any[];
}
