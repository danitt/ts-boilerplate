import { test, expect } from 'vitest';

import { sayHello } from './hello-world.js';

test('Hello default', (): void => {
  const result: string = sayHello();
  expect(result).toEqual('Hello World');
});

test('Hello name', (): void => {
  const neo = 'Mr Anderson';
  const result: string = sayHello(neo);
  expect(result).toEqual(`Hello ${neo}`);
});
