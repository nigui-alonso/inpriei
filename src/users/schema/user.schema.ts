import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: Number, required: true, unique: true })
  dni: number;

  @Prop({ type: Boolean, default: false })
  isDeactivated: boolean;

  @Prop({ type: String, required: true })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
