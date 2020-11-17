import { createConnection } from "typeorm";

createConnection();

// docker run --name GamesFounderDB -e POSTGRES_PASSWORD=102155545Ab. -p 5432:5432 -d postgres
// yarn typeorm-model-generator -h localhost -d bitbank -u postgres -x bitbank -e postgres -o . -s public
