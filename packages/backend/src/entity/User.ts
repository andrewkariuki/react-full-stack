import * as bcrypt from "bcryptjs";
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from "typeorm";
import { Todo } from "./Todo";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("varchar", { length: 255, unique: true }) email: string;

  @Column("text", { select: false }) password: string;

  @OneToMany(() => Todo, (todo) => todo.user) todos: Todo[];

  @CreateDateColumn() createdDate: Date;

  @UpdateDateColumn() updatedDate: Date;

  @DeleteDateColumn() deletedDate: Date;

  @VersionColumn() version: number;

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  validatePassword(password: string) {
    return bcrypt.compare(password, this.password);
  }
}
