let obj = {
  doFunction (func, x, y) {
    this._result = func (x, y);
    return this;
  },
  clear () {
    this._result = 0;
    return this;
  },
}

function sum (x, y) {
  return x + y;
};

function mul (x, y) {
  return x * y;
};

obj.doFunction(sum, 2, 4).doFunction(mul, 3, 6).clear();
console.log(obj._result);

obj.doFunction(mul, 3, 6).clear().doFunction(sum, 2, 4);
console.log(obj._result);

obj.doFunction(sum, 2, 4).clear().doFunction(mul, 3, 6);
console.log(obj._result);
