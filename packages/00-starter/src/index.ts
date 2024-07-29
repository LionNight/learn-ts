import { expectType } from 'tsd';

expectType<string>('linbudu'); // √
// expectType<string>(123) // ×

const name = 'james'

console.log('Your TypeScript Playground works!!!!');
console.log(name)
