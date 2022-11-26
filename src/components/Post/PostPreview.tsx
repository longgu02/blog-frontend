import { Typography } from '@mui/material'
import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'

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

export default function PostPreview(props: { key: Post['_id']; post: Post }) {
  const { post } = props
  const testImg =
    'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: 0,
        mb: 4,
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ pr: 1 }}>
        <Typography
          variant="subtitle1"
          sx={{ maxWidth: '400px', fontWeight: 'bold' }}
        >
          {post.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ maxWidth: '400px' }}>
          {post.summary}
        </Typography>
      </Box>
      <Image
        src={testImg}
        width={200}
        height={150}
        style={{ display: 'flex' }}
        alt="Thumbnail"
      ></Image>
    </Paper>
  )
}
