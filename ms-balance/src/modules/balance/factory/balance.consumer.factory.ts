import { ConsumerSubscribe } from "../../@shared/consumer/consumer";
import { BalanceConsumer } from "../consumer/balance.consumer";
import { AccountRepository } from "../repository/account.repository";
import { UpdateBalanceUseCase } from "../usecase/update-balance/update-balance.usecase";

export default class BalanceConsumerFactory {
  static create(consumerSubscribe: ConsumerSubscribe) {
    const accountRepository = new AccountRepository();
    const updateBalanceUseCase = new UpdateBalanceUseCase(accountRepository);
    const balanceRouter = new BalanceConsumer(consumerSubscribe, updateBalanceUseCase);
    return balanceRouter;
  }
}