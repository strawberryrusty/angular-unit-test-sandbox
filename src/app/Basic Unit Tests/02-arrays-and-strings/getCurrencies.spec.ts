import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
  it('should return all the currencies in the array', () => {
    const result = getCurrencies()
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
     expect(result).toContain('EUR');
  });
});


// import { getCurrencies } from "./getCurrencies";

// describe('getCurrencies', () => {
//     it('should return the supported currencies', () => {
//         const result = getCurrencies();
//         expect(result).toContain('USD');
//         expect(result).toContain('EUR');
//         expect(result).toContain('AUD');
//     });
// });
