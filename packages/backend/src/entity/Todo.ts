import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from "typeorm";
import { User } from "./User";

@Entity("todos")
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("varchar", { length: 255 }) description: string;

  @Column("text", { select: false }) complete: boolean;

  @Column("integer") userId: number;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;

  @CreateDateColumn() createdDate: Date;

  @UpdateDateColumn() updatedDate: Date;

  @DeleteDateColumn() deletedDate: Date;

  @VersionColumn() version: number;
}
