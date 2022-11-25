import { Button, Typography, SxProps, Theme, Box } from '@mui/material'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

interface User {
  username: string
  firstName: string
  lastName: string
}

export default function LoginButton(props: { sx?: SxProps<Theme> }) {
  const [cookie, setCookie, removeCookie] = useCookies(['user'])
  const [user, setUser] = useState<User | undefined>(undefined)
  useEffect(() => {
    if (cookie.user) {
      const jwt = cookie?.user
      axios
        .get('http://localhost:3000/auth/get-user', {
          headers: {
            authorization: jwt,
          },
        })
        .then((res) => {
          setUser(res.data['user'])
        })
        .catch((err) => {
          setUser(undefined)
          console.error(err)
        })
    } else {
      setUser(undefined)
    }
  }, [cookie])
  console.log(user)
  return (
    <Box sx={{ ...props.sx }}>
      {!user ? (
        <Button
          fullWidth={true}
          sx={(theme) => ({
            [theme.breakpoints.down('lg')]: {
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
            },
            pl: 4,
            pr: 4,
            margin: 2,
            borderRadius: 3,
            backgroundColor: '#000000',
            color: '#FFFFFF',
            '&:hover': {
              color: '#000000',
            },
          })}
        >
          <Typography variant="body2">Sign In</Typography>
        </Button>
      ) : (
        <Box>{`${user.firstName} ${user.lastName}`}</Box>
      )}
    </Box>
  )
}
