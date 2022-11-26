enum UserRole {
  'admin',
  'author',
  'staff',
  'reader',
}

export interface Post {
  _id: string
  title: string
  slug: string
  content: string
  user: {
    firstName: string
    lastName: string
  }
  summary: string
  published: boolean
  createAt: Date
  updateAt: Date
  publishedAt: Date
}

export interface User {
  _id: string
  firstName: string
  lastName: string
  mobile: string
  email: string
  username: string
  registerAt: Date
  lastLogin: Date
  intro: string
  avatar: string
  role: UserRole
}

export interface Category {
  _id: string
  childrenId: string
  title: string
  slug: string
}

export interface Comment {
  postId: string
  upvote: number
  content: string
  user: User
  createAt: Date
}

export interface Tag {
  title: string,
  metaTitle: string,
  slug: string,
}
