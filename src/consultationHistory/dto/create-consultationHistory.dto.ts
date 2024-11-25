import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateConsultationHistoryDto {
    @ApiProperty({ example: '2023-11-25', description: 'The date of the consultation.' })
    @IsNotEmpty()
    @IsDateString()
    date: string;

    @ApiProperty({ example: 'f3f8e3f0-d1b8-435b-9e89-2cb4e8f39e6f', description: 'The ID of the patient.' })
    @IsNotEmpty()
    @IsString()
    patientId: string;
}
