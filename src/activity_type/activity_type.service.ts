import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActivityTypeDto } from './dto/create-activity_type.dto';
import { UpdateActivityTypeDto } from './dto/update-activity_type.dto';
import { ActivityType } from './entities/activity_type.entity';

@Injectable()
export class ActivityTypeService {
  constructor(
    @InjectRepository(ActivityType)
    private readonly activityTypeRepository: Repository<ActivityType>,
  ) {}

  create(createActivityTypeDto: CreateActivityTypeDto) {
    const activityType: ActivityType = new ActivityType();
    activityType.name = createActivityTypeDto.name;

    return this.activityTypeRepository.save(activityType);
  }

  findAll() {
    return this.activityTypeRepository.find();
  }

  findOne(id: string) {
    return this.activityTypeRepository.findOneBy({ id });
  }

  update(id: string, updateActivityTypeDto: UpdateActivityTypeDto) {
    const activityType: ActivityType = new ActivityType();
    activityType.name = updateActivityTypeDto.name;
    activityType.id = id;

    return this.activityTypeRepository.save(activityType);
  }

  remove(id: string) {
    return this.activityTypeRepository.delete(id);
  }
}
