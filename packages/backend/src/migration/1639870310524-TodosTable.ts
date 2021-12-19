import { MigrationInterface, QueryRunner } from "typeorm";

export class TodosTable1639870310524 implements MigrationInterface {
  name = "TodosTable1639870310524";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "todos" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, "complete" text NOT NULL DEFAULT false, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "deletedDate" TIMESTAMP, "version" integer NOT NULL, CONSTRAINT "PK_ca8cafd59ca6faaf67995344225" PRIMARY KEY ("id"))'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "todos"');
  }
}
