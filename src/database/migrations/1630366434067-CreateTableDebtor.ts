import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateTableDebtor1630366434067 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'debtor',
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
                name: 'cnpj',
                type: 'varchar',
                length: '1000',
                isNullable: true,
              },
            ],
          }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('debtor');
    }
    

}
