import { IsString, IsNotEmpty } from 'class-validator';

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
  filter: string;

  @IsString()
  type: string;
}
