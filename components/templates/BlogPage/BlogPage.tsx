/* eslint-disable max-len */
import Link from 'next/link'
import Image from 'next/image'
import { faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { BlogPageProps } from '@/types/posts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => (
  <main className='min-h-screen py-12'>
    <section className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <h1 className='text-4xl font-bold text-gray-900 mb-8 text-center'>
        Наш блог
      </h1>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => (
          <article
            key={post.slug}
            className='relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl'
          >
            <div className='absolute inset-0 z-0'>
              <Image
                src={post.image || '/images/default-post-image.jpg'}
                alt={post.title}
                layout='fill'
                objectFit='cover'
                className='opacity-30'
              />
            </div>
            <div className='relative z-10 p-6'>
              <h2 className='text-xl font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600'>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.date && (
                <p className='text-sm text-gray-600 mb-4 flex items-center'>
                  <FontAwesomeIcon icon={faCalendar} className='mr-2' />
                  {new Date(post.date).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              )}
              {post.description && (
                <p className='text-gray-600 mb-4 line-clamp-3'>
                  {post.description}
                </p>
              )}
              <Link
                href={`/blog/${post.slug}`}
                className='inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300'
              >
                Читать далее
                <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
)

export default BlogPage
