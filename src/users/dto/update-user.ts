export class UpdateUserDto {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly dni?: number;
  readonly role?: string;
  readonly isDeactivated?: boolean;
}
