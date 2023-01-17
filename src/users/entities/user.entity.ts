import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { IsNumber, IsString } from 'class-validator';

import { CoreEntity } from 'src/common/entities/core.entity';
import { Word } from 'src/words/entities/word.entity';
import { Test } from 'src/tests/entities/test.entity';

@Entity()
export class User extends CoreEntity {
  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  email: string;

  @Column()
  @IsNumber()
  translateAttempts: number;

  @OneToMany(() => Word, (word) => word.user)
  words: Word[];

  @OneToMany(() => Test, (test) => test.creator)
  createdTests: Test[];

  @ManyToMany(() => Test, (test) => test.users)
  tests: Test[];
}
