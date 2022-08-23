describe("Тестирование функции defUpperCase()", function() {
  
    it('Функция должна вернуть переданный текст "denis lisyutenko" в верхнем регистре', () => {

        const t1 = "denis lisyutenko"
        expect(defUpperCase(t1)).toBe(t1.toUpperCase());

    });

    it('Функция должна вернуть текст по умолчанию "DEFAULT TEXT" в верхнем регистве', () => {
        expect(defUpperCase()).toBe("DEFAULT TEXT");

    })

  });