/* eslint-disable max-len */
import Link from 'next/link'
import { PostPageProps } from '@/types/posts'

const PostPage: React.FC<PostPageProps> = ({ post }) => (
  <main className='min-h-screen py-12'>
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
        className='prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:list-disc prose-ol:list-decimal'
        dangerouslySetInnerHTML={{ __html: post.content || '' }}
      />
    </article>
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mt-10'>
      <Link
        href='/blog'
        className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10'
      >
        ← Обратно к списку постов
      </Link>
    </section>
  </main>
)

export default PostPage
