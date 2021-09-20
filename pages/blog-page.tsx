import Layout from '../components/Layout'
import { Post } from '../components/Post'
import { GetStaticProps } from 'next'
import { getAllPostsData } from '../lib/fetch'
import { POST } from '../types/type'

type STATICPROPS = {
  posts: POST[]
}

const BlogPage: React.FC<STATICPROPS> = ({ posts }) => {
  return (
    <Layout title={'blog'}>
      <p className="text-4xl">Blog-page</p>
      {posts &&
        posts.map((post, index) => (
          <Post
            userId={post.userId}
            title={post.title}
            body={post.body}
            id={post.id}
            key={index}
          />
        ))}
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
