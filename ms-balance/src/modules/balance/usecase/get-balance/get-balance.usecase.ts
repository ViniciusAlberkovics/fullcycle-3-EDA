import UseCaseInterface from "../../../@shared/usecase/use-case.interface";
import BalanceGateway from "../../gateway/balance.gateway";
import { GetBalanceInput, GetBalanceOutput } from "./get-balance.dto";

export class GetBalanceUseCase implements UseCaseInterface {
  constructor(private readonly balanceGateway: BalanceGateway) {}
  async execute(input: GetBalanceInput): Promise<GetBalanceOutput> {
    const account = await this.balanceGateway.find(input.id);
    return { balance: account.balance };
  }
}