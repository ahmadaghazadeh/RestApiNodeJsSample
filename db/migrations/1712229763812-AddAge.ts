import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAge1712229763812 implements MigrationInterface {
    name = 'AddAge1712229763812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    }

}
