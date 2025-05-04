export interface Post {
    id: number
    title: string
    content: string
  }
  
  export interface PostsState {
    posts: Post[]
    loading: boolean
    error: string | null
  }