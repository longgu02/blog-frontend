import { Typography, Paper, Box, Avatar } from '@mui/material'
import Image from 'next/image'
import moment from 'moment'
import Link from 'next/link'

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
  const { post, key } = props
  const testImg =
    'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <Link href={`/post/${post.slug}`}>
    
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
      <Box sx={{ pr: 1, pl: 2, position: 'relative' }}>
        <Typography
          variant="subtitle1"
          sx={{ maxWidth: '350px', fontWeight: 'bold', pb: 1 }}
        >
          {post.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '400px',
            color: '	#A9A9A9',
            fontWeight: 'bold',
            mb: 1,
          }}
        >
          {post.summary}
        </Typography>
        {post.user && (
          <Box
            sx={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'start', mt: 'auto', mb: 0, position: 'absolute', bottom: 10 }}
          >
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography
              variant="body2"
              sx={{ margin: 'auto 0 auto 5px', fontWeight: 'bold' }}
            >
              {`${post.user?.firstName} ${post.user?.lastName} - `}
            </Typography>
            <Typography
              variant="body2"
              sx={{ margin: 'auto 0 auto 5px', fontWeight: 'bold' }}
            >
              {moment(post.createAt).format('MMM Do YY')}
            </Typography>
          </Box>
        )}
      </Box>
      <Image
        src={testImg}
        width={200}
        height={150}
        style={{ display: 'flex' }}
        alt="Thumbnail"
      ></Image>
    </Paper>
    </Link>
  )
}
