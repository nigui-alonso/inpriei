import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema({ timestamps: true })
export class Payment {
  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: String, required: true })
  courseId: string;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: String, required: true })
  date: string;

  @Prop({ type: Boolean, required: true })
  isPaid: boolean;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
