import { Column, Entity, ManyToOne } from 'typeorm';
import { IsNumber, IsString } from 'class-validator';

import { CoreEntity } from '../../common/entities/core.entity';

@Entity()
export class Word extends CoreEntity {
  @Column()
  @IsString()
  word: string;

  @Column()
  @IsString()
  translate: string;

  @Column()
  @IsNumber()
  translateAttempts: number;

  @ManyToOne(() => User, (user) => user.words)
  user: User;
}
