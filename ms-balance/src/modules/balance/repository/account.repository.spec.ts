import { Sequelize } from "sequelize-typescript";
import { AccountModel } from "./account.model";
import { AccountRepository } from "./account.repository";

describe("AccountRepository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([
      AccountModel,
    ]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
  
  it("should find an account", async () => {
    await AccountModel.create({
      id: "1",
      balance: 100,
    });
    const accountRepository = new AccountRepository();
    const account = await accountRepository.find("1");

    expect(account.id).toEqual("1");
    expect(account.balance).toEqual(100);
  });

  it("should update an account balance", async () => {
    await AccountModel.create({
      id: "2",
      balance: 100,
    });
    const accountRepository = new AccountRepository();
    await accountRepository.updateBalance("2", 200);

    const account = await accountRepository.find("2");
    expect(account.balance).toEqual(200);
  });
});
