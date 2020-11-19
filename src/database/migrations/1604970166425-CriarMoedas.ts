import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarMoedas1604970166425 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: "moedas",
                columns: [
                    {
                        name: "id",
                        isPrimary: true,
                        type: "uuid",
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "BTC",
                        type: "boolean",
                    },
                    {
                        name: "ETH",
                        type: "boolean",
                    },
                    {
                        name: "USDT",
                        type: "boolean",
                    },
                    {
                        name: "XRP",
                        type: "boolean",
                    },
                    {
                        name: "BCH",
                        type: "boolean",
                    },
                    {
                        name: "LINK",
                        type: "boolean",
                    },
                    {
                        name: "BNB",
                        type: "boolean",
                    },
                    {
                        name: "LTC",
                        type: "boolean",
                    },
                    {
                        name: "DOT",
                        type: "boolean",
                    },
                    {
                        name: "BSV",
                        type: "boolean",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
