export interface PostPageProps {
  post: {
    slug: string
    title: string
    content: string
    date: string
  }
}

export interface PostProps {
  params: { slug: string }
}

export interface Post {
  slug: string
  title: string
}

export interface BlogPageProps {
  posts: Post[]
}
