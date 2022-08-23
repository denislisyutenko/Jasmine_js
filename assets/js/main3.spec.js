describe("Тестирование класса Mat с помощью beforeEach", function() {

    let m;
    let i = 2;
    let j = 3;

    beforeEach(() => {
        m = new Mat(i++, j++)
        console.log(m)
    })
  
    it('Суммирование методом sum() 2, 3 => 5', () => {
        expect(m.sum()).toBe(5);
    });

    it('Суммирование методом sum() 3, 4 => 7', () => {
        expect(m.sum()).toBe(7);
    });

    it('Суммирование методом sum() 4, 5 => 9', () => {
        expect(m.sum()).toBe(9);
    });

    it('Суммирование методом sum() 5, 6 => 11', () => {
        expect(m.sum()).toBe(11);
    });

  });