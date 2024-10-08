
// You can create functions with a type helper
// mapped over the top, and pass the type to them
// manually...

// ================================
// "Normal" fetch
const makeFetch = (url: string) => {
  return fetch(url).then((res) => res.json());
};

makeFetch("/api/endpoint").then((res: { name: string , age: number }) => {
  console.log(res);
})

// ================================
// Generic fetch
const makeFetchGeneric = <TRes>(url: string): Promise<TRes> => {
  return fetch(url).then((res) => res.json());
};

type ExpectedResponse = { name: string , age: number };

makeFetchGeneric<ExpectedResponse>("/api/endpoint").then((res) => {
  console.log(res);
})


export {};