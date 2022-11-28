import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import PostPreview from 'src/components/Post/PostPreview'
import NavigationBar from '../../components/NavigationBar'
import { Post } from 'src/constant/interfaces'
import { BlogClient } from 'src/services/clientRequest'

export default function Posts(props: { posts: { data: Array<Post> } }) {
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
  const Client = BlogClient
  const posts = await Client.get('/posts')
  return {
    props: {
      posts: posts,
    },
  }
}
