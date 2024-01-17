import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { Attendance } from './schema/attendance.schema';
import { CreateAttendanceDto } from './dto/create-attendance';
import { UpdateAttendanceDto } from './dto/update-attendace';

@Controller('api/attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Get()
  findAll(): Promise<Attendance[]> {
    return this.attendancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Attendance> {
    return this.attendancesService.findOne(id);
  }

  @Post()
  create(@Body() createAttendaceDto: CreateAttendanceDto): Promise<Attendance> {
    return this.attendancesService.create(createAttendaceDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAttendanceDto: UpdateAttendanceDto,
  ): Promise<Attendance> {
    return this.attendancesService.update(id, updateAttendanceDto);
  }
}
