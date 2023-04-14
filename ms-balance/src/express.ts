import ExpressAdapter from "./modules/@shared/api/express-adapter";
import BalanceRouterFactory from "./modules/balance/factory/balance.router.factory";


export const httpServer = new ExpressAdapter();

const balanceRouter = BalanceRouterFactory.create(httpServer);
balanceRouter.registerHttpServerListeners();
