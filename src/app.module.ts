import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { PaymentsModule } from './payments/payments.module';
import { AttendancesModule } from './attendances/attendances.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/core'), // Aca iria la URI de Atlas
    UsersModule,
    CoursesModule,
    PaymentsModule,
    AttendancesModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
