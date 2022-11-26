import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import PostPreview from 'src/components/Post/PostPreview'
import PostLayout from '../../components/layouts/PostLayout'
import NavigationBar from '../../components/NavigationBar'

interface Post {
  _id: string
  title: string
  slug: string
  content: string
  user: {
    firstName: string
    lastName: string
  }
  summary: string
  published: boolean
  createAt: Date
  updateAt: Date
  publishedAt: Date
}

export default function Post(props: { posts: { data: Array<Post> } }) {
  const { posts } = props
  return (
    <Box>
      <NavigationBar />
      <Container>
        <Grid container>
          <Grid item md={6}>
            {posts.data.map((post) => (
              <PostPreview key={post._id} post={post} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export const getStaticProps = async () => {
  const _promise = await fetch('http://localhost:3000/posts')
  const posts = await _promise.json()
  return {
    props: {
      posts: posts,
    },
  }
}
