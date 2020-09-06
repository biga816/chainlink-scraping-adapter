import {
  IsString,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
  IsObject,
  IsNumber,
  Min,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class Data {
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

export class GetBodyDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => Data)
  data: Data;
}
