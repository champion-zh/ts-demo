interface Todo {
  title: string,
  description: string,
  completed: boolean
}

// 从类型T中选择属性K, 组成新的类型
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: '历史',
  completed: false
}