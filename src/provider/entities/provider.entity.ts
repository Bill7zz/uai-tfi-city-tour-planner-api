import { Activity } from 'src/activity/entities/activity.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Provider {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 80 })
  name: string;

  @Column({ type: 'int' })
  cuitCuil: number;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text' })
  direction: string;

  @Column({ type: 'int' })
  zipCode: number;

  @OneToMany(() => Activity, (activity) => activity.provider)
  activities: Activity[];
}
