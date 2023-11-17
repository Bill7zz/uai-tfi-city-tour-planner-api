import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchController } from './search.controller';
import { Activity } from 'src/activity/entities/activity.entity';
import { ActivityService } from 'src/activity/activity.service';
import { ActivityType } from 'src/activity_type/entities/activity_type.entity';
import { Provider } from 'src/provider/entities/provider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Activity, ActivityType, Provider])],
  controllers: [SearchController],
  providers: [ActivityService],
})
export class SearchModule {}
