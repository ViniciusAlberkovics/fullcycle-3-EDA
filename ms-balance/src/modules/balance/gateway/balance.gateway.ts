import { Account } from "../domain/account";

export default interface BalanceGateway {
  find(id: string): Promise<Account>;
  updateBalance(id: string, balance: number): Promise<void>;
}
