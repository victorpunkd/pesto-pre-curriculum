const describe = (desc, fn) => {
  console.log(desc);
  fn();
};

const it = (msg, fn) => describe("  " + msg, fn);

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log("pass");
      return true;
    } else {
      console.log("fail");
      return false;
    }
  },
});

const expect = (exp) => matchers(exp);

function adder(a, b) {
  return a + b;
}

function substarction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

describe("adder", () => {
  it("adds two numbers", () => {
    const result = adder(1, 2);
    expect(result).toBe(3);
  });
});

describe("substract", () => {
  it("substracts two numbers", () => {
    const result = substarction(2, 1);
    expect(result).toBe(1);
  });
});

describe("multiplication", () => {
  it("multiplicatess two numbers", () => {
    const result = multiplication(2, 1);
    expect(result).toBe(2);
  });
});

describe("divide", () => {
  it("divides two numbers", () => {
    const result = substarction(4, 2);
    expect(result).toBe(2);
  });
});
