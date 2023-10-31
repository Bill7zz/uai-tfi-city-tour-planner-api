import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  description: string;
  direction: string;
  zipCode: number;
  weekSchedule: string[];
  startTimes: string[];
  duration: number;
  maxParticipants: number;
  price: number;
  slots: number;
  typeId: string;
  providerId: string;
}
