interface Todo {
  title: string,
  description: string
}
// 该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。
type MyReadonly<T> = {
  readonly [p in keyof T]: T[p]
}

const todo1: MyReadonly<Todo> = {
  title: 'hey',
  description: '撒方式'
}