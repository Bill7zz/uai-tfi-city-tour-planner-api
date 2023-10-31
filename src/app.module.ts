import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityTypeModule } from './activity_type/activity_type.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityType } from './activity_type/entities/activity_type.entity';
import { ActivityModule } from './activity/activity.module';
import { ProviderModule } from './provider/provider.module';
import { Activity } from './activity/entities/activity.entity';
import { Provider } from './provider/entities/provider.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      entities: [ActivityType, Activity, Provider],
      database: 'city-tour-planner',
      synchronize: true,
      logging: true,
    }),
    ActivityTypeModule,
    ActivityModule,
    ProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
