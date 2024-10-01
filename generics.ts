// Generics

// Without generics, we would either have to give the identity function a specific type:
function identityNumber(arg: number): number {
  return arg;
}

// Or, we could describe the identity function using the any type:
function identityAny(arg: any): any {
  return arg;
}

// But using the any type defeats the purpose of static typing -
// we lose all the information about the types of the values passed to and from the function.

// We can describe the identity function using generics:
function into_identity<T>(arg: T): T {
  console.log('arg:', arg);
  console.log('type:', typeof arg);
  return arg;
}

// let goutput = into_identity('myString');
// let goutput2 = into_identity(10);
// let goutput3 = into_identity(true);

function LoggingIdentity<Type>(arg: Type[]): Type[] {
  console.log('Length:', arg.length);
  return arg;
}

let gtOutputs = LoggingIdentity(['Hey', 'Hello', 'World']);

// console.log(gtOutputs);

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Input>(arg: Input) => Input = identity;

// console.log(myIdentity('Hello'));
