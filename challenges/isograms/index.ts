import { assert } from 'chai';

export function isIsogram(str: string): boolean {
  return str.toLowerCase() === [...new Set(str.toLowerCase().split(''))].join('');
}

describe('example', function () {
  it('test', function () {
    assert.equal(isIsogram('Dermatoglyphics'), true);
    assert.equal(isIsogram('isogram'), true);
    assert.equal(isIsogram('aba'), false, 'same chars may not be adjacent');
    assert.equal(isIsogram('moOse'), false, 'same chars may not be same case');
    assert.equal(isIsogram('isIsogram'), false);
    assert.equal(isIsogram(''), true, 'an empty string is a valid isogram');
  });
});
