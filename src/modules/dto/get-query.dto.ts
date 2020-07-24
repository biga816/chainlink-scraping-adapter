import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

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

  @IsString()
  @IsOptional()
  type: string;
}
