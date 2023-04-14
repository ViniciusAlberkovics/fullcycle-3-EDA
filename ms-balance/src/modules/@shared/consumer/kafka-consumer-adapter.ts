import { Kafka } from "kafkajs";
import { Consumer, EachMessageHandler } from "./consumer";

export class KafkaConsumerAdapter implements Consumer {
  private kafka: Kafka;

  constructor(clientId: string, brokers: string[]) {
    this.kafka = new Kafka({
      clientId: clientId,
      brokers: brokers,
    });
  }
  
  async subscribe(topic: string, groupId: string, callback: EachMessageHandler): Promise<void> {
    const consumer = this.kafka.consumer({ groupId });
    await consumer.connect().then(() => console.log("Kafka connected")).catch((err) => console.error(err));
    await consumer.subscribe({ topic });
  
    await consumer.run({
      eachMessage: callback,
    });
  }
}