import { UpdateBalanceUseCase } from "./update-balance.usecase";

const MockRepository = () => {
  return {
    find: jest.fn(),
    updateBalance: jest.fn(),
  };
};

describe("UpdateBalanceUseCase test", () => {
  it("should update balance", async () => {
    const accountRepository = MockRepository();
    const updateBalanceUseCase = new UpdateBalanceUseCase(accountRepository);
    await updateBalanceUseCase.execute({
      accountIDFrom: "1",
      accountIDTo: "2",
      balanceAccountIDFrom: 50,
      balanceAccountIDTo: 150,
    });
    expect(accountRepository.updateBalance).toBeCalledWith("1", 50);
    expect(accountRepository.updateBalance).toBeCalledWith("2", 150);
  });
});