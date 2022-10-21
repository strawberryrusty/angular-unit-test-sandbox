import  {compute} from './compute'; //importing function

// describe() // defines a suite, group of related tests
// it() //defines a spec or a test
describe('compute', () => {
    // body of test
    it('should return 0 if input is negative', () => {
        const result = compute(-1); //using compute function that has been imported
        expect(result).toBe(0); //expect and tobe are functions that come with Jasmine
    });

    it('should increment by 1 if input is positive', () => {
        const result = compute(2);
        expect(result).toBe(3);
    });
});
