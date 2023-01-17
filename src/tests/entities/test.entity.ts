import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { CoreEntity } from '../../common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Test extends CoreEntity {
  @Column()
  @IsOptional()
  title?: string;

  @Column()
  @IsNumber()
  stepsCount: number;

  @Column()
  @IsBoolean()
  isCompleated: boolean;

  @Column()
  @IsOptional()
  compleatedAt?: Date;

  @Column()
  @IsBoolean()
  isStarted: boolean;

  @Column()
  @IsArray()
  rightSteps: number[];

  @ManyToOne(() => User, (user) => user.createdTests)
  creator: User;

  @ManyToMany(() => User, (user) => user.tests)
  users: User[];
}
