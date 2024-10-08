

// You can pass types to types!
type MyGenericType<TData> = {
  data: TData;
};

type Example1 = MyGenericType<{
  name: string;
}>;

type Example2 = MyGenericType<string>;

type Example3 = MyGenericType<number>;

export {};
