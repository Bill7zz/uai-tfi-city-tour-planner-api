import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityTypeService } from './activity_type.service';
import { ActivityTypeController } from './activity_type.controller';
import { ActivityType } from './entities/activity_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityType])],
  controllers: [ActivityTypeController],
  providers: [ActivityTypeService],
})
export class ActivityTypeModule {}
