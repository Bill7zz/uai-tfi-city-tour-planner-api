import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { Activity } from './entities/activity.entity';
import { ActivityType } from 'src/activity_type/entities/activity_type.entity';
import { Provider } from 'src/provider/entities/provider.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Activity, ActivityType, Provider]),
    ActivityType,
    Provider,
  ],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
