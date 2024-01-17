import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  lessonType: string;

  @Prop({ type: String, required: true })
  teacherId: string;

  @Prop({ type: [String], required: false })
  helpersIds: string[];

  @Prop({ type: [String], required: true })
  studentsIds: string[];

  @Prop({ type: Number, required: true })
  hourlyPrice: number;

  @Prop({ type: Number, required: true })
  teacherHourSalary: number;

  @Prop({ type: Number, required: false })
  helperHourSalary: number;

  @Prop({ type: Number, required: true })
  monthlyHours: number;

  @Prop({ type: Boolean, default: true })
  isActive: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
