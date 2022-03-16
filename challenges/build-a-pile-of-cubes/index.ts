import { assert } from 'chai';

// shit solution but it works

export function findNb(m: number): number {
  function getM(n: number): number {
    let m = 0;
    for (let i = n; i > 0; i--) {
      m += i ** 3;
    }

    return m;
  }

  let n = 1;
  while (getM(n) < m) {
    n++;
  }
  if (getM(n) == m) return n;
  return -1;
}

describe('Fixed Tests nbMonths', function () {
  it('Basic tests', function () {
    assert.strictEqual(findNb(4183059834009), 2022);
    assert.strictEqual(findNb(24723578342962), -1);
    assert.strictEqual(findNb(135440716410000), 4824);
    assert.strictEqual(findNb(40539911473216), 3568);
  });
});
