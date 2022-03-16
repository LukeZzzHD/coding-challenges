import { assert } from 'chai';

export const isPangram = (phrase: string): boolean =>
  [
    ...new Set(
      phrase
        .toLowerCase()
        .split('')
        .filter((letter) => 'abcdefghijklmnopqrstuvwxyz'.includes(letter))
    ),
  ].length == 26;

describe('example', function () {
  it('test', function () {
    assert.strictEqual(isPangram('The quick brown fox jumps over the lazy dog.'), true);
    assert.strictEqual(isPangram('This is not a pangram.'), false);
  });
});
