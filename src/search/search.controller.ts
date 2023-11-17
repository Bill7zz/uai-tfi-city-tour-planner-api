import { Get, Controller, Query } from '@nestjs/common';
import { ActivityService } from 'src/activity/activity.service';
import { SearchQuery } from './dto/search.dto';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

@Controller('search')
export class SearchController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  findAll(@Query() query: SearchQuery) {
    const { date, participants } = query;
    const formatedWeekDay = format(new Date(date), 'EEEE', { locale: es });
    const weekDay = formatedWeekDay
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    console.log(weekDay);
    return this.activityService.findAllByFilters(weekDay, participants);
  }
}
