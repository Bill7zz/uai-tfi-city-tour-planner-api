import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateProviderDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cuitCuil: number;

  @IsString()
  @IsNotEmpty()
  email: string;

  direction: string;

  zipCode: number;
}
