import UseCaseInterface from "../../../@shared/usecase/use-case.interface";
import BalanceGateway from "../../gateway/balance.gateway";
import { UpdateBalanceInput } from "./update-balance.dto";

export class UpdateBalanceUseCase implements UseCaseInterface {
  constructor(private readonly balanceGateway: BalanceGateway){}

  async execute(input: UpdateBalanceInput): Promise<void> {
    await Promise.all([
      this.balanceGateway.updateBalance(input.accountIDFrom, input.balanceAccountIDFrom),
      this.balanceGateway.updateBalance(input.accountIDTo, input.balanceAccountIDTo),
    ]);
  }
}