import { Box, Button, Typography } from '@mui/material'
import LoginButton from '../Button/LoginButton'
import NavigationButton from '../Button/NavigationButton'

const NavigationItem = [
  { title: 'Dashboard', path: '/dashboard' },
  { title: 'Membership', path: '/membership' },
  { title: 'Write', path: '/post/create' },
]

export default function NavigationBar() {
  return (
    <Box
      sx={{
        borderBottom: '1px solid #dbd9d9',
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={(theme) => ({
          [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'space-between',
          },
          margin: 'auto 0 auto 30px',
        })}
      >
        <Typography variant="h3">Locy</Typography>
      </Box>
      <Box
        sx={{
          flexWrap: 'wrap',
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        {NavigationItem.map((item) => (
          <NavigationButton key={item.title} sx={{ display: 'flex' }}>
            <Typography
              variant="body2"
              sx={(theme) => ({ color: theme.palette.text.primary })}
            >
              {item.title}
            </Typography>
          </NavigationButton>
        ))}
        {/* <LoginButton /> */}
      </Box>
    </Box>
  )
}
