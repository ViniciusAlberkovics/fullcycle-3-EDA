import { GetBalanceUseCase } from "./get-balance.usecase";

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve({id: "1", balance: 100})),
    updateBalance: jest.fn(),
  };
};

describe("GetBalanceUseCase test", () => {
  it("should get the balance of an account", async () => {
    const accountRepository = MockRepository();
    const getBalanceUseCase = new GetBalanceUseCase(accountRepository);
    const output = await getBalanceUseCase.execute({id:"1"});
    expect(output.balance).toEqual(100);
  });
});