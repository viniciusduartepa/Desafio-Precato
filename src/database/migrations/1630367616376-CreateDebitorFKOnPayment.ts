import {MigrationInterface, QueryRunner,TableColumn,TableForeignKey} from "typeorm";

export class CreateDebitorFKOnPayment1630367616376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'payment',
            new TableColumn({
              name: 'debtor_id',
              type: 'uuid',
              isNullable: true,
            })
          );
          await queryRunner.createForeignKey(
            'payment',
            new TableForeignKey({
              name: 'debtor_fk',
              columnNames: [ 'debtor_id' ],
              referencedColumnNames: [ 'id' ],
              referencedTableName: 'debtor',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('payment', 'debitor_fk');
        await queryRunner.dropColumn('payment', 'debitor_id');
    }

}
