import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDateString, IsArray } from 'class-validator';

export class CreateConsultationDataDto {
    @ApiProperty({ example: 'consultation-id-123', description: 'The ID of the consultation history.' })
    @IsNotEmpty()
    @IsString()
    consultationId: string;

    @ApiProperty({ example: '2023-11-25', description: 'The date of the consultation data.' })
    @IsNotEmpty()
    @IsDateString()
    date: string;

    @ApiProperty({ example: ['Exercise', 'Yoga'], description: 'Activities performed during consultation.' })
    @IsArray()
    activity: string[];

    @ApiProperty({ example: ['Breakfast', 'Lunch'], description: 'Food and beverage intake during consultation.' })
    @IsArray()
    fnbIntake: string[];

    @ApiProperty({ example: ['Paracetamol'], description: 'Medications taken during consultation.' })
    @IsArray()
    lastMed: string[];

    @ApiProperty({ example: ['Patient feels better'], description: 'Opinions shared during consultation.' })
    @IsArray()
    opinion: string[];

    @ApiProperty({ example: ['Low'], description: 'Levels of anxiety during consultation.' })
    @IsArray()
    anxiety: string[];

    @ApiProperty({ example: ['Mild'], description: 'Levels of pain during consultation.' })
    @IsArray()
    pain: string[];
}
