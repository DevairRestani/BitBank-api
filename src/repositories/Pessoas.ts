import { Pessoas } from "../models/entities/Pessoas";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository()
class PessoasRepository extends Repository<Pessoas> {
    public async ListAll(id: string): Promise<Pessoas | undefined> {
        return await this.findOne({ id });
    }
}

export default PessoasRepository;
