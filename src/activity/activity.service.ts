import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual, ArrayContains } from 'typeorm';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';
import { ActivityType } from 'src/activity_type/entities/activity_type.entity';
import { Provider } from 'src/provider/entities/provider.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
    @InjectRepository(ActivityType)
    private readonly activityTypeRepository: Repository<ActivityType>,
    @InjectRepository(Provider)
    private readonly providerRepository: Repository<Provider>,
  ) {}

  async create(createActivityDto: CreateActivityDto) {
    const activityType = await this.activityTypeRepository.findOne({
      where: { id: createActivityDto.typeId },
    });
    if (!activityType) {
      throw new NotFoundException();
    }

    const provider = await this.providerRepository.findOne({
      where: { id: createActivityDto.providerId },
    });
    if (!provider) {
      throw new NotFoundException();
    }
    const activity = new Activity();
    activity.name = createActivityDto.name;
    activity.description = createActivityDto.description;
    activity.direction = createActivityDto.direction;
    activity.zipCode = createActivityDto.zipCode;
    activity.weekSchedule = createActivityDto.weekSchedule;
    activity.startTimes = createActivityDto.startTimes;
    activity.duration = createActivityDto.duration;
    activity.maxParticipants = createActivityDto.maxParticipants;
    activity.price = createActivityDto.price;
    activity.slots = createActivityDto.slots;
    activity.typeId = createActivityDto.typeId;
    activity.providerId = createActivityDto.providerId;

    return this.activityRepository.save(activity);
  }

  async findAll() {
    return this.activityRepository.find({
      relations: { provider: true, type: true },
    });
  }

  async findAllByFilters(day: string, participant: number) {
    return this.activityRepository.findBy({
      maxParticipants: MoreThanOrEqual(participant),
      weekSchedule: ArrayContains([day]),
    });
  }

  findOne(id: string) {
    return this.activityRepository.findOneBy({ id });
  }

  async update(id: string, updateActivityDto: UpdateActivityDto) {
    const activityType = await this.activityTypeRepository.findOne({
      where: { id: updateActivityDto.typeId },
    });
    if (!activityType) {
      throw new NotFoundException();
    }

    const provider = await this.providerRepository.findOne({
      where: { id: updateActivityDto.providerId },
    });
    if (!provider) {
      throw new NotFoundException();
    }

    const activity: Activity = new Activity();
    activity.id = id;
    activity.name = updateActivityDto.name;
    activity.description = updateActivityDto.description;
    activity.direction = updateActivityDto.direction;
    activity.zipCode = updateActivityDto.zipCode;
    activity.providerId = updateActivityDto.providerId;
    activity.typeId = updateActivityDto.typeId;
    activity.price = updateActivityDto.price;
    activity.duration = updateActivityDto.duration;
    activity.weekSchedule = updateActivityDto.weekSchedule;
    activity.startTimes = updateActivityDto.startTimes;
    activity.maxParticipants = updateActivityDto.maxParticipants;
    activity.slots = updateActivityDto.slots;

    return this.activityRepository.save(activity);
  }

  remove(id: string) {
    return this.activityRepository.delete(id);
  }
}
