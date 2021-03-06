import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from "typeorm";

@Entity("todos")
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column("varchar", { length: 255 })
  title: string;

  @Column("varchar", { length: 255 }) description: string;

  @Column("text", { default: false }) complete: boolean;

  @CreateDateColumn() createdDate: Date;

  @UpdateDateColumn() updatedDate: Date;

  @DeleteDateColumn() deletedDate: Date;

  @VersionColumn() version: number;
}
