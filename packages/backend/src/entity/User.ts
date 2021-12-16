import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  UpdateDateColumn,
  DeleteDateColumn,
  VersionColumn,
  BeforeInsert,
} from "typeorm";

import * as argon2 from "argon2";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("varchar", { length: 255, unique: true }) email: string;

  @Column("text", { select: false }) password: string;

  @CreateDateColumn() createdDate: Date;

  @UpdateDateColumn() updatedDate: Date;

  @DeleteDateColumn() deletedDate: Date;

  @VersionColumn() version: number;

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    this.password = await argon2.hash(this.password);
  }
}
