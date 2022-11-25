import { Box, Grid, Typography, Avatar } from '@mui/material'
import { GetStaticProps } from 'next'
import PostLayout from '../../src/components/layouts/PostLayout'
import NavigationBar from '../../src/components/NavigationBar'
import axios from 'axios'
import Parser from 'html-react-parser'

export default function Post(props: { post: Post }) {
  const { post } = props
  return (
    <PostLayout enableToggle={false}>
      <Grid container columnSpacing={4}>
        <Grid item xs={3}>
          <h1>Outline</h1>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam.
            Maxime mollitia.
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <h1>{post.title}</h1>
          <Box
            sx={{ flexWrap: 'flex', display: 'flex', justifyContent: 'start' }}
          >
            <Avatar></Avatar>
            <Box sx={{ margin: 'auto 0 auto 10px' }}>
              <Typography variant="body1">{`${post.user.firstName} ${post.user.lastName}`}</Typography>
              <Typography variant="body1">
                {new Date(post.createAt).toDateString()}
              </Typography>
            </Box>
          </Box>
          <Box>{Parser(post.content)}</Box>
          {/* <Typography variant="body1"></Typography> */}
        </Grid>
      </Grid>
    </PostLayout>
  )
}

interface Post {
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

export const getStaticPaths = async () => {
  const _promise: any = await fetch('http://localhost:3000/posts')
  const posts = await _promise.json()
  const paths = posts.data.map((post: Post) => ({
    params: {
      slug: post.slug,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

interface params {
  slug: string
}

export const getStaticProps = async (props: { params: params }) => {
  const _promise: any = await fetch(
    `http://localhost:3000/posts/${props.params?.slug}`
  )
  const post = await _promise.json()
  if (!post.data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post: post.data,
    },
  }
}
