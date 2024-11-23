import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsDateString, IsOptional } from 'class-validator';

export class CreateConsultationDataDto {
    @ApiProperty({ description: 'The ID of the consultation this data is associated with', example: '947a025e-bb70-4e71-8d12-8e88b42f4768' })
    @IsString()
    consultationId: string;

    @ApiProperty({ description: 'The date of the consultation data entry', example: '2024-11-08T00:00:00Z' })
    @IsDateString()
    date: string;

    @ApiProperty({ description: 'Activity data', example: ['activity1', 'activity2'] })
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    activity: string[];

    @ApiProperty({ description: 'Food and beverage intake data', example: ['water', 'juice'] })
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    fnbIntake: string[];

    @ApiProperty({ description: 'Last medication information', example: ['med1', 'med2'] })
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    lastMed: string[];

    @ApiProperty({ description: 'Opinions or observations', example: ['opinion1', 'opinion2'] })
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    opinion: string[];

    @ApiProperty({ description: 'Anxiety levels or notes', example: ['anxiety1', 'anxiety2'] })
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    anxiety: string[];

    @ApiProperty({ description: 'Pain levels or notes', example: ['pain1', 'pain2'] })
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    pain: string[];
}
