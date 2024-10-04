export interface Post {
  slug: string
  title: string
  date?: string
  content?: string
  image?: string
}

export interface PostItem {
  slug: string
  title: string
  date?: string
  content?: string
  description?: string
  image?: string
}

export interface BlogPageProps {
  posts: PostItem[]
}

export interface PostPageProps {
  post: Post
}

export interface PostProps {
  params: { slug: string }
}
