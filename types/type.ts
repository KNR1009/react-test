export type POST = {
  userId: number
  id: number
  title: string
  body: string
}

type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

type task = {
  userId: number
  id: number
  title: string
  completed: boolean
}
