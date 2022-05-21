import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  Min,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class GetBodyDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  path: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(value => Number(value))
  @Min(0)
  index: number;

  @IsString()
  @IsOptional()
  filter: string;
}
