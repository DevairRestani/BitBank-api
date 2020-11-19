import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Moedas } from "./Moedas";

@Index("UQ_f6bf21a178b0573d4c552fc1415", ["documento"], { unique: true })
@Entity("pessoas", { schema: "public" })
export class Pessoas {
    @Column("uuid", {
        primary: true,
        name: "id",
        default: () => "uuid_generate_v4()",
    })
    id: string;

    @Column("character varying", { name: "nome" })
    nome: string;

    @Column("character varying", { name: "documento", unique: true })
    documento: string;

    @Column("character varying", { name: "senha" })
    senha: string;

    @Column("character varying", { name: "email" })
    email: string;

    @Column("character varying", { name: "telefone", nullable: true })
    telefone: string | null;

    @Column("character varying", { name: "tipo" })
    tipo: string;

    @Column("boolean", { name: "tipo_pessoa" })
    tipoPessoa: boolean;

    @Column("boolean", { name: "acesso" })
    acesso: boolean;

    @Column("timestamp without time zone", {
        name: "criado_em",
        default: () => "now()",
    })
    criadoEm: Date;

    @Column("timestamp without time zone", {
        name: "atualizado_em",
        default: () => "now()",
    })
    atualizadoEm: Date;

    @OneToOne(() => Moedas, (moedas) => moedas.pessoas)
    @JoinColumn([{ name: "moedas_id", referencedColumnName: "id" }])
    moedas: Moedas;
}
