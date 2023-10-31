import { Activity } from 'src/activity/entities/activity.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class ActivityType {
  /**
   * this decorator will help to auto generate id for the table.
   */

  /**
   * Also, if you don't need a primary column,
   * but need to generate uuid sequence, you can try this:
   * @Column()
   * @Generated("uuid")
   * uuid: string;
   */

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @OneToMany(() => Activity, (activity) => activity.type)
  activities: Activity[];
}
