export const calculator = {
    add(a: number, b: number): number {
        return a + b;
    },
};

describe('My integration test suite', () => {
    it('works', () => {
        const spy = vi.spyOn(calculator, 'add');

        const result = calculator.add(1, 2);

        expect(spy).toHaveBeenCalledWith(1, 2);
        expect(result).toBe(3);
    });
});
