import type { Metadata } from 'next'
import { getAllPostSlugs, getPostData } from '@/lib/posts'
import PostPage from '@/components/templates/BlogPage/PostPage/PostPage'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostData(params.slug)

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

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug)

  return <PostPage post={post} />
}
