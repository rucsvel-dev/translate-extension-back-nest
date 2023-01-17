import { IsOptional, IsString } from 'class-validator';

import { CoreOutput } from '../../common/dtos/output.dto';

export class CreateWordDto {
  @IsString()
  word: string;
}

export class CreateWordOutput extends CoreOutput {
  @IsOptional()
  translate?: string;

  @IsOptional()
  translateAttempts?: number;
}
