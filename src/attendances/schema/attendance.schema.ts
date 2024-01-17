import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AttendanceDocument = HydratedDocument<Attendance>;

@Schema()
export class Attendance {
  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: String, required: true })
  courseId: string;

  @Prop({ type: Number, required: true })
  hours: number;

  @Prop({ type: Number, default: false })
  month: number;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);
