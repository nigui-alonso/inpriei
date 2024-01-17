export class UpdatePaymentDto {
  readonly userId?: string;
  readonly courseId?: string;
  readonly amount?: number;
  readonly date?: string;
  readonly isPaid?: boolean;
}
