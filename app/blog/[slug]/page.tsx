/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import PostPage from '@/components/templates/BlogPage/PostPage/PostPage'
import { PostProps } from '@/types/posts'

export async function generateStaticParams() {
  const posts = await getAllPosts(['slug'])
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: PostProps) {
  const post = await getPostBySlug(params.slug, ['title', 'content', 'date'])
  //@ts-ignore
  return <PostPage post={post} />
}
