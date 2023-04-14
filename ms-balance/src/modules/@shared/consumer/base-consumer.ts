import { ConsumerSubscribe } from "./consumer";

export abstract class BaseConsumer {
  constructor(protected readonly consumerSubscribe:ConsumerSubscribe) {}

  abstract registerConsumers(): void;
}