
// You can pass these type parameters to
// other parts of JS, like Set and Map

const set1 = new Set();
const set2 = new Set<number>();
const set3 = new Set<string>();

// No generic
set1.add(1);
set1.add("abc");

// Generic set to number
set2.add(1);
set2.add("abc");

// Generic set to string
set3.add(1);
set3.add("abc");


export {};