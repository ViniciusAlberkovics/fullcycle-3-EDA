import { HttpServerSubscribe } from "../../@shared/api/http-server";
import { AccountRepository } from "../repository/account.repository";
import { BalanceRouter } from "../router/balance.router";
import { GetBalanceUseCase } from "../usecase/get-balance/get-balance.usecase";

export default class BalanceRouterFactory {
  static create(httpServer: HttpServerSubscribe) {
    const accountRepository = new AccountRepository();
    const getBalanceUseCase = new GetBalanceUseCase(accountRepository);
    const balanceRouter = new BalanceRouter(httpServer, getBalanceUseCase);
    return balanceRouter;
  }
}