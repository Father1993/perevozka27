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
            className='bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl'
          >
            <div className='relative h-64 md:h-96'>
              <Image
                src={post.image as string} // Убедитесь, что у вас есть изображение по умолчанию
                alt={post.title}
                layout='fill'
                objectFit='cover'
                className='transition-transform duration-300 hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
              <div className='absolute bottom-0 left-0 p-6 text-white'>
                <h2 className='text-2xl md:text-3xl font-bold mb-2'>
                  <Link href={`/blog/${post.slug}`} className='hover:underline'>
                    {post.title}
                  </Link>
                </h2>
                {post.date && (
                  <p className='text-sm mb-4 flex items-center'>
                    <FontAwesomeIcon icon={faCalendar} className='mr-2' />
                    {new Date(post.date).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                )}
                <Link
                  href={`/blog/${post.slug}`}
                  className='inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors duration-300'
                >
                  Читать далее
                  <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
)

export default BlogPage
