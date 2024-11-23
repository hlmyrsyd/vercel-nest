import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString } from 'class-validator';

export class CreateConsultationHistoryDto {
    @ApiProperty({ description: 'The ID of the patient', example: 'some-uuid' })
    @IsString()
    patientId: string;

    @ApiProperty({ description: 'The date of the consultation', example: '2024-11-08T00:00:00Z' })
    @IsDateString()
    date: string;
}