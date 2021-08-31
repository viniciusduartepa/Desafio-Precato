import {MigrationInterface, QueryRunner,TableColumn, TableForeignKey} from "typeorm";

export class CreateCreditorFKOnPayment1630367166469 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'payment',
            new TableColumn({
              name: 'creditor_id',
              type: 'uuid',
              isNullable: true,
            })
          );
          await queryRunner.createForeignKey(
            'payment',
            new TableForeignKey({
              name: 'creditor_fk',
              columnNames: [ 'creditor_id' ],
              referencedColumnNames: [ 'id' ],
              referencedTableName: 'creditor',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('payment', 'creditor_fk');
        await queryRunner.dropColumn('payment', 'creditor_id');
    }

}
