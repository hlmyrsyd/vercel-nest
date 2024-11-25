import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateConsultationHistoryDto {
    @ApiProperty({ example: '2023-11-25', description: 'The date of the consultation.' })
    @IsNotEmpty()
    @IsDateString()
    date: string;

    @ApiProperty({ example: 'patient-id-123', description: 'The ID of the patient.' })
    @IsNotEmpty()
    @IsString()
    patientId: string;
}
