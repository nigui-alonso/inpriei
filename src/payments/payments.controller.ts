import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payment } from './schema/payent.schema';
import { CreatePaymentDto } from './dto/create-payment';
import { UpdatePaymentDto } from './dto/update-payment';

@Controller('api/payments')
export class PaymentsController {
  constructor(private readonly PaymentService: PaymentsService) {}

  @Get()
  findAll(): Promise<Payment[]> {
    return this.PaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Payment> {
    return this.PaymentService.findOne(id);
  }

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.PaymentService.create(createPaymentDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ): Promise<Payment> {
    return this.PaymentService.update(id, updatePaymentDto);
  }
}
