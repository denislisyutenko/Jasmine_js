// describe("Тестирование класа Mat", function() {
  
//     it("Проверяем суммирование методом sum()", () => {
//         const m = new Mat (2,3)
//       expect(m.sum()).toBe(5);
//     });
//   });


describe("Тестирование класса Mat", function() {
  
    it("Проверяем суммирование методом sum()", () => {
        const m = new Mat (2,3)
      expect(m.sum()).toBe(5);
    });

    it('Проверяем вычитание методом sub()', () => {
        expect(new Mat(2,3).sub()).toBe(-1);
        expect(new Mat(21,11).sub()).toBe(10);
        expect(new Mat(4,-20).sub()).toBe(24);
    });
    
    it('Умножение mul() для чисел 2 и 3 должен вернуть 6', () => {
        expect(new Mat(2,3).mul()).toBe(6);
        expect(new Mat('2',3).mul()).toBe(6);
        expect(new Mat(2,'3').mul()).toBe(6);
        expect(new Mat('2','3').mul()).toBe(6);
    });

    it('Умножение mul() для не чисел должено вернуть NaN', () => {
        expect(new Mat('2', 'str').mul()).toBeNaN();
        expect(new Mat(5, 10).mul()).not.toBeNaN();
    });

  });