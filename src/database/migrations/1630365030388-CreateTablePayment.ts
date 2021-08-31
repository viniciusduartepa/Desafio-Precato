import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTablePayment1630365030388 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'payment',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'inital_value',
                type: 'numeric',
                precision: 12,
                isNullable: true,
              },
              {
                name: 'final_value',
                type: 'numeric',
                precision: 12,
                isNullable: true,
              },
              {
                name: 'data',
                type: 'timestamp',
                isNullable: true,
              },
              {
                  name: 'status',
                  type: 'varchar',
                  length: '1000',
                  isNullable: true,
              },
              {
                name: 'reason',
                type: 'varchar',
                length: '1000',
                isNullable: true,
            }
            ],
          }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('payment');
    }

}
