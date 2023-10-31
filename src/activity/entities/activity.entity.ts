import { ActivityType } from 'src/activity_type/entities/activity_type.entity';
import { Provider } from 'src/provider/entities/provider.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 80 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  direction: string;

  @Column({ type: 'int' })
  zipCode: number;

  @Column({ type: 'text', array: true })
  weekSchedule: string[];

  @Column({ type: 'text', array: true })
  startTimes: string[];

  @Column({ type: 'int' })
  duration: number;

  @Column({ type: 'int' })
  maxParticipants: number;

  @Column('decimal', { precision: 6, scale: 2 })
  price: number;

  @Column({ type: 'int' })
  slots: number;

  @Column({
    name: 'typeId',
  })
  typeId: string;

  @Column({
    name: 'providerId',
  })
  providerId: string;

  @ManyToOne(() => ActivityType, (type) => type.activities)
  @JoinColumn({ name: 'typeId', referencedColumnName: 'id' })
  type: ActivityType;

  @ManyToOne(() => Provider, (provider) => provider.activities)
  @JoinColumn({ name: 'providerId', referencedColumnName: 'id' })
  provider: Provider;
}
