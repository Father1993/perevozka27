import type { Metadata } from 'next'
import { getAllPostSlugs, getPostData } from '@/lib/posts'
import PostPage from '@/components/templates/BlogPage/PostPage/PostPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostData(slug)

  return {
    title: `${post.title} | Блог Perevozka27`,
    description:
      post.description || 'Статья о грузоперевозках в блоге Perevozka27',
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Perevozka27'],
    },
  }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostData(slug)

  return <PostPage post={post} />
}
