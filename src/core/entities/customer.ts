/* import { AutoMap } from 'nestjsx-automapper';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../enums/user-role';

@Entity()
export class Customer {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  @AutoMap()
  lastName: string;

  @Column({ length: 50 })
  @AutoMap()
  email: string;

  @AutoMap()
  @Column({ nullable: true })
  profileImageUrl: string;

  @Column()
  password: string;

  @Column()
  passwordTries: number;

  @Column({ nullable: true })
  refreshToken: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.CUSTOMER,
  })
  role: Role;

  @AutoMap()
  @CreateDateColumn()
  createdDate: Date;

  @AutoMap()
  @Column({ nullable: true })
  modifiedDate: Date;

  @AutoMap()
  @Column({ nullable: true })
  lastLoginDate: Date;

  @AutoMap()
  @Column()
  isDeleted: boolean;

  @AutoMap()
  @Column()
  isActive: boolean;
}
 */
