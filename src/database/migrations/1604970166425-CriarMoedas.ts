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
                        default: false,
                    },
                    {
                        name: "ETH",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "USDT",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "XRP",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "BCH",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "LINK",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "BNB",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "LTC",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "DOT",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "BSV",
                        type: "boolean",
                        default: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
