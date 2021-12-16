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
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("varchar", { length: 255 }) description: string;

  @Column("text", { select: false }) complete: boolean;

  @CreateDateColumn() createdDate: Date;

  @UpdateDateColumn() updatedDate: Date;

  @DeleteDateColumn() deletedDate: Date;

  @VersionColumn() version: number;
}
