'use client'
import Link from 'next/link'
import { BlogPageProps } from '@/types/posts'

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  console.log('')
  return (
    <main>
      <section className='container'>
        <div>
          <h1>Блог</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default BlogPage
