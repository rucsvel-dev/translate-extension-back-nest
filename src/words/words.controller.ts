import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WordsService } from './words.service';
import { CreateWordDto, CreateWordOutput } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post()
  create(@Body() createWordDto: CreateWordDto): Promise<CreateWordOutput> {
    return this.wordsService.create(createWordDto);
  }

  @Get()
  findMyWords() {
    return this.wordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wordsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateWordDto: UpdateWordDto) {
  //   return this.wordsService.update(+id, updateWordDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wordsService.remove(+id);
  }
}
