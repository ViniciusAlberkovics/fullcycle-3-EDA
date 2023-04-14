import { EachMessagePayload } from "kafkajs";

export interface EachMessageHandler {
  (payload: EachMessagePayload): Promise<void>;
}

export interface ConsumerSubscribe {
  subscribe(topic: string, groupId: string, callback: EachMessageHandler): Promise<void>;
}

export interface Consumer extends ConsumerSubscribe {
}