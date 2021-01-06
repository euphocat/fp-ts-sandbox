import * as Option from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

describe('fp-ts/Option', () => {
  it('should explain map', () => {
    const result = pipe(
      Option.some(1),
      Option.map((a) => `the number is ${a}`),
    );

    expect(result).toStrictEqual(Option.some('the number is 1'));
  });

  it('should explain Option.of and Option.ap', () => {
    const add = (a: number) => (b: string) => `${a} and ${b}`;

    const result = pipe(
      Option.of(add),
      Option.ap(Option.some(1)),
      Option.ap(Option.some('hello')),
    );

    expect(result).toStrictEqual(Option.some('1 and hello'));
  });
});
