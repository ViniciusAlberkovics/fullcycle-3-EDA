import * as pg from 'pg';
import { Sequelize } from "sequelize-typescript";
import { httpServer } from "./express";
import { AccountModel } from "./modules/balance/repository/account.model";
import "./consumer"

export let sequelize: Sequelize;
async function setupDb() {
  sequelize = new Sequelize({
    database: "BALANCES",
    username: "localuser",
    password: "anyPassword1",
    host: "db-pg",
    port: 5432,
    dialect: 'postgres',
    dialectModule: pg,
    define: {
      omitNull: true,
      charset: 'utf8mb4',
    },
    logging: false,
    sync: { force: false },
  });
  await sequelize.addModels([
    AccountModel,
  ]);
  await sequelize.sync();
}
setupDb();

const PORT = process.env.PORT || 3003;

httpServer.listen(Number(PORT), () => {
  console.log(`server running on http://localhost:${PORT}`);
});

