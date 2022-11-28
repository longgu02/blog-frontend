import { Box, Grid, Typography, Avatar, Paper } from '@mui/material'
import { GetStaticProps } from 'next'
import PostLayout from '../../components/layouts/PostLayout'
import NavigationBar from '../../components/NavigationBar'
import axios from 'axios'
import Parser from 'html-react-parser'
import { Post } from 'src/constant/interfaces'
import { BlogClient } from 'src/services/clientRequest'
import Image from 'next/image'

function SidebarContent(props: { posts: Array<Post> }) {
  const { posts } = props
  const testImg =
    'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <Box>
      {posts.map((post) => (
        <Box key={post._id} sx={{ mb: 3 }}>
          <Paper
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              borderRadius: 0,
            }}
            elevation={1}
          >
            <Image
              src={testImg}
              alt="thumbnail"
              width={125}
              height={90}
            ></Image>
            <Box sx={{ padding: 1 }}>
              <Typography
                sx={{
                  maxWidth: 180,
                  textAlign: 'right',
                  fontSize: '17px',
                  fontWeight: 'bold',
                }}
              >{`${post.title.slice(0, 25)}...`}</Typography>
            </Box>
          </Paper>
        </Box>
      ))}
    </Box>
  )
}

export default function PostBySlug(props: {
  post: Post
  relatedPosts: Array<Post>
}) {
  const { post, relatedPosts } = props
  return (
    <PostLayout
      enableToggle={false}
      sideBarContent={<SidebarContent posts={relatedPosts} />}
    >
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

export const getStaticPaths = async () => {
  const Client = BlogClient
  const posts: { data: Array<Post> } = await Client.get('/posts')
  const paths = posts.data.map((post: Post) => ({
    params: {
      slug: post.slug.toString(),
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
  const Client = BlogClient
  const post: { data: Post } = await Client.get(`/posts/${props.params?.slug}`)
  const relatedPosts: { data: Post } = await Client.get(`/posts`)
  if (!post.data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post: post.data,
      relatedPosts: relatedPosts.data,
    },
  }
}
