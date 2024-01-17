import { Injectable } from '@nestjs/common';
import { Attendance } from './schema/attendance.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAttendanceDto } from './dto/create-attendance';
import { UpdateAttendanceDto } from './dto/update-attendace';

@Injectable()
export class AttendancesService {
  constructor(
    @InjectModel(Attendance.name) private attendanceModel: Model<Attendance>,
  ) {}

  async findAll(): Promise<Attendance[]> {
    return this.attendanceModel.find().lean();
  }

  async findOne(id: string): Promise<Attendance> {
    return this.attendanceModel.findById({ _id: id }).lean();
  }

  async create(createAttendanceDto: CreateAttendanceDto): Promise<Attendance> {
    const createdUser = new this.attendanceModel(createAttendanceDto);
    return createdUser.save();
  }

  async update(
    id: string,
    updateAttendanceDto: UpdateAttendanceDto,
  ): Promise<Attendance> {
    return this.attendanceModel
      .updateOne({ _id: id }, updateAttendanceDto)
      .lean();
  }
}
