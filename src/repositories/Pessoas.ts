import { Pessoas } from "../models/entities/Pessoas";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository()
class PessoasRepository extends Repository<Pessoas> {
    public async ListAll(email: string): Promise<Pessoas | undefined> {
        return await this.findOne({ email });
    }
}

export default PessoasRepository;
