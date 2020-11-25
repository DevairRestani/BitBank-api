import { createConnection } from "typeorm";

createConnection();

// docker run --name bitbank -e POSTGRES_PASSWORD=bitbank -p 5432:5432 -d postgres
// yarn typeorm-model-generator -h localhost -d bitbank -u postgres -x bitbank -e postgres -o . -s public
