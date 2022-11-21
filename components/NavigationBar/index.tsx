import { Box, Button } from '@mui/material'
import LoginButton from '../Button/LoginButton'

const NavigationItem = [
  { title: 'Dashboard', path: '/dashboard' },
  { title: 'Membership', path: '/membership' },
  { title: 'Write', path: '/post/create' },
]

export default function NavigationBar() {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFF00',
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'end',
      }}
    >
      {NavigationItem.map((item) => (
        <Button key={item.title} sx={{ display: 'flex' }}>
          {item.title}
        </Button>
      ))}
      <LoginButton/>
    </Box>
  )
}
