const addCommas = require('./addCommas');


describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
        }
        );
  test('it returns "1,000" when passed 1000', () => {
    expect(addCommas(1000)).toBe("1,000");
        }
        );
    test('it returns "1,000,000" when passed 1000000', () => {
        expect(addCommas(1000000)).toBe("1,000,000");
        }
        );
    test('it returns "1,000,000,000" when passed 1000000000', () => {
        expect(addCommas(1000000000)).toBe("1,000,000,000");
        }
        );
    test('it returns "1,000,000,000,000" when passed 1000000000000', () => {
        expect(addCommas(1000000000000)).toBe("1,000,000,000,000");
        }
        );
    test('random cases', () => {
        expect(addCommas(1234)).toBe('1,234');
        expect(addCommas(12345)).toBe('12,345');
        expect(addCommas(9876543210)).toBe('9,876,543,210');
        expect(addCommas(-19)).toBe('-19');
        expect(addCommas(-19.99)).toBe('-19.99');
        expect(addCommas(-3141592.65)).toBe('-3,141,592.65');
        expect(addCommas(0)).toBe('0');
    }
    );
});

