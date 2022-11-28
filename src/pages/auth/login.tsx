import * as React from 'react'
import {
  Avatar,
  Button,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'
import useNotify from 'src/hooks/useNotify'
import { AuthClient } from 'src/services/clientRequest'
import { useAuthToken } from 'src/hooks/useAuthToken'

export default function Login() {
  const [cookie, setCookie, removeCookie] = useCookies(['user', 'prevUrl'])
  const [setJwt, setRefreshToken, _jwt, _refreshToken] = useAuthToken()
  const { errorNotify } = useNotify()
  const Client = AuthClient
  const prevUrl = useSelector((state: RootState) => state.url.prevUrl)
  const router = useRouter()

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const res = await AuthClient.post('/login', {
      username: data.get('username'),
      password: data.get('password'),
    }).catch((err) => errorNotify(err.message))

    setJwt(res.jwt)
    setRefreshToken(res.refreshToken)
    const prevUrl = cookie?.prevUrl || '/post'
    removeCookie('prevUrl')
    return router.push(prevUrl)
  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#FAF0D7',
          p: 4,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            size="small"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            size="small"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={false}
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  )
}
