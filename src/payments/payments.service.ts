import { Injectable } from '@nestjs/common';
import { Payment } from './schema/payent.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePaymentDto } from './dto/create-payment';
import { UpdatePaymentDto } from './dto/update-payment';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {}

  async findAll(): Promise<Payment[]> {
    return this.paymentModel.find().lean();
  }

  async findOne(id: string): Promise<Payment> {
    return this.paymentModel.findById({ _id: id }).lean();
  }

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const createdUser = new this.paymentModel(createPaymentDto);
    return createdUser.save();
  }

  async update(
    id: string,
    updatePaymentDto: UpdatePaymentDto,
  ): Promise<Payment> {
    return this.paymentModel.updateOne({ _id: id }, updatePaymentDto).lean();
  }
}
