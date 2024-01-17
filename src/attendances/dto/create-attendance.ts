export class CreateAttendanceDto {
  readonly userId: string;
  readonly courseId: string;
  readonly month: number;
  readonly hours: number;
}
