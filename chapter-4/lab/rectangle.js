class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getCircumference() {
    return (this.height * this.width) * 2;
  }

  getArea() {
    return this.width * this.height;
  }
}

const r1 = new Rectangle(10, 20);
console.log(r1.getCircumference());
console.log(r1.getArea());