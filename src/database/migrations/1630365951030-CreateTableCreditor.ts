import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableCreditor1630365951030 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'creditor',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'name',
                type: 'varchar',
                length: '1000',
                isNullable: true,
              },
              {
                name: 'cpf',
                type: 'varchar',
                length: '1000',
                isNullable: true,
              },
              {
                  name: 'status',
                  type: 'varchar',
                  length: '1000',
                  isNullable: true,
              },
            ],
          }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('creditor');
    }

}
