import { Column, Entity, OneToMany } from "typeorm";
import { Pessoas } from "./Pessoas";

@Entity("moedas", { schema: "public" })
export class Moedas {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("boolean", { name: "BTC" })
  btc: boolean;

  @Column("boolean", { name: "ETH" })
  eth: boolean;

  @Column("boolean", { name: "USDT" })
  usdt: boolean;

  @Column("boolean", { name: "XRP" })
  xrp: boolean;

  @Column("boolean", { name: "BCH" })
  bch: boolean;

  @Column("boolean", { name: "LINK" })
  link: boolean;

  @Column("boolean", { name: "BNB" })
  bnb: boolean;

  @Column("boolean", { name: "LTC" })
  ltc: boolean;

  @Column("boolean", { name: "DOT" })
  dot: boolean;

  @Column("boolean", { name: "BSV" })
  bsv: boolean;

  @OneToMany(() => Pessoas, (pessoas) => pessoas.moedas)
  pessoas: Pessoas[];
}
