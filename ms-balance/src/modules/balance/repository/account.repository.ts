import { Account } from "../domain/account";
import BalanceGateway from "../gateway/balance.gateway";
import { AccountModel } from "./account.model"

export class AccountRepository implements BalanceGateway {
  async updateBalance(id: string, balance: number): Promise<void> {
    await AccountModel.update({ balance }, { where: { id } });
  }
  
  async find(id: string): Promise<Account> {
    const account = await AccountModel.findOne({
      where: { id },
    });

    if (!account) {
      throw new Error("Account not found");
    }

    return new Account(account.id, account.balance);
  }
}