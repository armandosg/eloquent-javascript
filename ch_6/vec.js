class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    const x = this.x + vector.x;
    const y = this.y + vector.y;
    return new Vec(x, y);
  }

  minus(vector) {
    const x = this.x - vector.x;
    const y = this.y - vector.y;
    return new Vec(x, y);
  }

  get length() {
    return (this.x * this.x + this.y * this.y) * 0.5;
  }
}

module.exports = {
  Vec: Vec
}
