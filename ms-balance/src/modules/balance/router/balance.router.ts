import BaseRouter from "../../@shared/api/base-router";
import { HttpMethod, HttpServerSubscribe } from "../../@shared/api/http-server";
import UseCaseInterface from "../../@shared/usecase/use-case.interface";

export class BalanceRouter extends BaseRouter {
  constructor(
    httpServerSubscribe: HttpServerSubscribe,
    private getBalance: UseCaseInterface,
  ) {
    super(httpServerSubscribe, '/balance');
  }

  registerHttpServerListeners(): void {
    this.httpServerSubscribe.on(
      HttpMethod.GET, `${this.basePath}/:id`, async (req, res) => {
        try {
          const { id } = req.params;
          const balance = await this.getBalance.execute({ id });
          return res.status(200).send(balance);
        } catch (error: any) {
          if (error.message === 'Account not found') {
            return res.status(404).send({ message: 'Account not found' });
          }
          return res.status(500);
        }
      }
    )
  }
}