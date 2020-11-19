import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CriarPessoas1604970176001 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: "pessoas",
                columns: [
                    {
                        name: "id",
                        isPrimary: true,
                        type: "uuid",
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "moedas_id",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "senha",
                        type: "varchar",
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "documento",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "tipo",
                        type: "varchar",
                    },
                    {
                        name: "tipo_pessoa",
                        type: "bool",
                    },
                    {
                        name: "acesso",
                        type: "boolean",
                    },
                    {
                        name: "criado_em",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "atualizado_em",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );

        const FKMoedas = new TableForeignKey({
            columnNames: ["moedas_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "moedas",
        });

        await queryRunner.createForeignKey("pessoas", FKMoedas);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("pessoas", "moedas_id");

        await queryRunner.dropTable("usuarios");
    }
}
