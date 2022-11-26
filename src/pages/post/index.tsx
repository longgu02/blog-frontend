import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import PostPreview from 'src/components/Post/PostPreview'
import NavigationBar from '../../components/NavigationBar'
import { Post } from 'src/constant/interfaces'


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
