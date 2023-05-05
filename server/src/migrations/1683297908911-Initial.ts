import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1683297908911 implements MigrationInterface {
    name = 'Initial1683297908911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(50) NOT NULL, "age" integer NOT NULL, "address" varchar(49) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
