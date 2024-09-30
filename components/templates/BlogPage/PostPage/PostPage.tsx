// 'use client'
// import { PostPageProps } from '@/types/posts'

// const PostPage: React.FC<PostPageProps> = ({ post }) => {
//   const handleRedirectToBlog = () => {
//     window.location.href = '/blog'
//   }

//   return (
//     <main>
//       <article className='container'>
//         <div>
//           <div>
//             <h1>{post.title}</h1>
//             {post.date && <time>{post.date}</time>}
//           </div>
//           <div dangerouslySetInnerHTML={{ __html: post.content }} />
//         </div>
//       </article>
//       <section>
//         <button onClick={handleRedirectToBlog}>Обратно к списку постов</button>
//       </section>
//     </main>
//   )
// }

// export default PostPage
