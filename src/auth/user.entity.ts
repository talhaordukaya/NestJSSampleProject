import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // eager: true means that when we fetch a user, we will get all of the tasks associated with that user
  @OneToMany(() => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
