/* eslint-disable max-len */
import { PostPageProps } from '@/types/posts'
import Link from 'next/link'

const PostPage: React.FC<PostPageProps> = ({ post }) => (
  <main className='bg-gray-50 min-h-screen py-12'>
    <article className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl'>
      <header className='mb-8'>
        <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
          {post.title}
        </h1>
        {post.date && (
          <time className='text-sm text-gray-600 italic'>
            Опубликовано: {post.date}
          </time>
        )}
      </header>
      <div
        className='prose prose-lg max-w-none'
        dangerouslySetInnerHTML={{ __html: post.content || '' }}
      />
    </article>
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mt-12'>
      <Link
        href='/blog'
        className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      >
        ← Обратно к списку постов
      </Link>
    </section>
  </main>
)

export default PostPage
