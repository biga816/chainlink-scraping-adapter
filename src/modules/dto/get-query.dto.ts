import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetQueryDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  path: string;

  @IsString()
  @IsOptional()
  filter: string;

  @IsBoolean()
  @IsOptional()
  @Transform(value => value?.toLowerCase() === 'true')
  isRawData: boolean;
}
