class Mat {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum () {
    return this.a + this.b;
  }

  sub () {
    return this.a - this.b;
  }
  mul () {
    return this.a * this.b;
  }
}

function defUpperCase(str) {
  return (str || 'Default text').toUpperCase();
}
