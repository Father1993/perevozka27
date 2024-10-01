/* eslint-disable @typescript-eslint/ban-ts-comment */
import BlogPage from '@/components/templates/BlogPage/BlogPage'
import { getAllPosts } from '@/lib/posts'

export default async function Blog() {
  const posts = await getAllPosts(['slug', 'title'])
  //@ts-ignore
  return <BlogPage posts={posts} />
}
