import { BaseConsumer } from "../../@shared/consumer/base-consumer";
import { ConsumerSubscribe } from "../../@shared/consumer/consumer";
import { Event } from "../../@shared/event.entity";
import UseCaseInterface from "../../@shared/usecase/use-case.interface";

export class BalanceConsumer extends BaseConsumer {
  constructor(protected readonly consumerSubscribe: ConsumerSubscribe,
    private readonly updateBalance: UseCaseInterface) {
    super(consumerSubscribe);
  }

  registerConsumers(): void {
    this.consumerSubscribe.subscribe('balances', 'wallet', async (payload) => {
      const { value } = payload.message;
      const { Name, Payload } = JSON.parse(value.toString()) as Event;
      if (Name === 'BalanceUpdated') {
        await this.updateBalance.execute({ 
          accountIDFrom: Payload.account_id_from,
          balanceAccountIDFrom: Payload.balance_account_id_from,
          accountIDTo: Payload.account_id_to,
          balanceAccountIDTo: Payload.balance_account_id_to,
        });
      }
    });
  }
}