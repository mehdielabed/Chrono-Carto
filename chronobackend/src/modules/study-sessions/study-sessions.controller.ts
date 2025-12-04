import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { StudySessionsService } from './study-sessions.service';
import { CreateStudySessionDto } from './dto/create-study-session.dto';
import { UpdateStudySessionDto } from './dto/update-study-session.dto';

@Controller('study-sessions')
export class StudySessionsController {
  constructor(private readonly studySessionsService: StudySessionsService) {}

  @Post()
  create(@Body() createStudySessionDto: CreateStudySessionDto) {
    return this.studySessionsService.create(createStudySessionDto);
  }

  @Get()
  findAll(
    @Query('date') date?: string,
    @Query('subject') subject?: string,
  ) {
    return this.studySessionsService.findAll(date, subject);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studySessionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudySessionDto: UpdateStudySessionDto,
  ) {
    return this.studySessionsService.update(id, updateStudySessionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.studySessionsService.remove(id);
  }
}
