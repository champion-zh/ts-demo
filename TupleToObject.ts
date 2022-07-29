// 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
const tuple = ['byd', 'nio', 'tesla']

type TupleToObject<T extends readonly any[]> = {
  [p in T[number]]: p
}

type result = TupleToObject<typeof tuple>