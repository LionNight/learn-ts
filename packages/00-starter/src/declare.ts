interface Foo {
    name: string;
    age: number;
}

interface Bar {
    name: string;
    job: string;
}

// let foo: Foo = {
//     name: 'james',
//     age: 18
// }
//
// let bar: Bar = {
//     name: 'kb',
//     job: 'fe'
// }

declare let foo: Foo
declare let bar: Bar

foo = bar
