import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
  it('should return all the currencies in the array', () => {
    const result = getCurrencies()
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
     expect(result).toContain('EUR');
  });
});
