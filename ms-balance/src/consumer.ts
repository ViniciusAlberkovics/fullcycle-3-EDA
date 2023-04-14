import BalanceConsumerFactory from "./modules/balance/factory/balance.consumer.factory";
import { KafkaConsumerAdapter } from "./modules/@shared/consumer/kafka-consumer-adapter";

const kafka = new KafkaConsumerAdapter("ms-balance", ["kafka:29092"]);
const balanceConsumer = BalanceConsumerFactory.create(kafka);
balanceConsumer.registerConsumers();
