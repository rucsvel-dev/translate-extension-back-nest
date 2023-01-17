import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateWordDto, CreateWordOutput } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { Word } from './entities/word.entity';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(Word) private readonly wordsRepository: Repository<Word>,
  ) {}

  async create(createWordDto: CreateWordDto): Promise<CreateWordOutput> {
    try {
      const existWord = await this.wordsRepository.findOne({
        where: {
          word: createWordDto.word,
        },
      });

      if (existWord) {
        const updatedTranslateAttempts = existWord.translateAttempts + 1;

        await this.wordsRepository.save({
          ...existWord,
          translateAttempts: updatedTranslateAttempts,
        });

        return {
          ok: true,
          translate: existWord.translate,
          translateAttempts: updatedTranslateAttempts,
        };
      }

      await this.wordsRepository.save(
        this.wordsRepository.create(createWordDto),
      );

      return { ok: true };
    } catch (err) {
      return { ok: false, error: `Cannot create word, ${err}` };
    }
  }

  findMyWords() {
    return `This action returns all words`;
  }

  findOne(id: number) {
    return `This action returns a #${id} word`;
  }

  remove(id: number) {
    return `This action removes a #${id} word`;
  }
}
