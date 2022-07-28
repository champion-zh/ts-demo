interface Todo {
  title: string,
  description: string
}

type MyReadonly<T> = {
  readonly [p in keyof T]: T[p]
}

const todo1: MyReadonly<Todo> = {
  title: 'hey',
  description: '撒方式'
}