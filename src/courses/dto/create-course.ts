export class CreateCourseDto {
  readonly name: string;
  readonly lessonType: string;
  readonly teacherId: string;
  readonly helpersIds?: [string];
  readonly studentsIds: [string];
  readonly hourlyPrice: number;
  readonly teacherHourSalary: number;
  readonly helperHourSalary?: number;
  readonly monthlyHours: number;
}
