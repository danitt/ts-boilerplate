export function sayHello(name?: string): string {
  return `Hello ${name ?? 'World'}`; // TS 3.7 Nullish Coalesce
}
