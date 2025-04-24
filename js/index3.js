class IntegerSet {
  constructor(maxValue) {
    this.maxValue = maxValue;
    this.set = new Array(maxValue + 1).fill(false);
  }

  // Inserção de um número no conjunto
  insert(num) {
    if (num >= 0 && num <= this.maxValue) {
      this.set[num] = true;
    }
  }

  // Remoção de um número do conjunto
  remove(num) {
    if (num >= 0 && num <= this.maxValue) {
      this.set[num] = false;
    }
  }

  // União de dois conjuntos
  union(otherSet) {
    const result = new IntegerSet(Math.max(this.maxValue, otherSet.maxValue));
    for (let i = 0; i <= result.maxValue; i++) {
      result.set[i] = (this.set[i] || otherSet.set[i]) || false;
    }
    return result;
  }

  // Interseção de dois conjuntos
  intersection(otherSet) {
    const result = new IntegerSet(Math.min(this.maxValue, otherSet.maxValue));
    for (let i = 0; i <= result.maxValue; i++) {
      result.set[i] = this.set[i] && otherSet.set[i];
    }
    return result;
  }

  // Diferença de conjuntos (this - otherSet)
  difference(otherSet) {
    const result = new IntegerSet(this.maxValue);
    for (let i = 0; i <= this.maxValue; i++) {
      result.set[i] = this.set[i] && !otherSet.set[i];
    }
    return result;
  }

  // Converte o conjunto para uma string
  toString() {
    const elementos = [];
    for (let i = 0; i <= this.maxValue; i++) {
      if (this.set[i]) {
        elementos.push(i);
      }
    }
    return `{ ${elementos.join(', ')} }`;
  }
}
