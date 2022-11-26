import {
  Button,
  Typography,
  SxProps,
  Theme,
  Box,
  IconButton,
  Tooltip,
  TooltipProps,
  tooltipClasses,
  styled,
} from '@mui/material'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import { Avatar } from '@mui/material'
import { stringAvatar } from 'src/utils/helper'
import { useRouter } from 'next/router'
import { NextRequest, NextResponse } from 'next/server'
interface User {
  username: string
  firstName: string
  lastName: string
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))

export default function LoginButton(props: { sx?: SxProps<Theme> }) {
  const [cookie, setCookie, removeCookie] = useCookies(['user'])
  const [user, setUser] = useState<User | undefined>(undefined)
  const router = useRouter()
  const jwt = cookie?.user
  useEffect(() => {
    if (jwt) {
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
  }, [cookie, jwt])
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
          onClick={() => {
            return router.push('/auth/login')
          }}
        >
          <Typography variant="body2">Sign In</Typography>
        </Button>
      ) : (
        <Box sx={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'end' }}>
          <IconButton sx={{ mt: 'auto', mb: 'auto' }} href="/post/create">
            <CreateOutlinedIcon />
          </IconButton>
          <IconButton sx={{ mt: 'auto', mb: 'auto' }}>
            <DashboardOutlinedIcon />
          </IconButton>
          <IconButton sx={{ mt: 'auto', mb: 'auto' }}>
            <NotificationsNoneIcon />
          </IconButton>
          <Box sx={{ mr: 2, mt: '3px', ml: 1 }}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit" variant="body1">
                    Signed in as&nbsp;
                    <span
                      style={{ fontWeight: 'bold' }}
                    >{`${user.firstName} ${user.lastName}`}</span>
                  </Typography>
                </React.Fragment>
              }
            >
              <Avatar {...stringAvatar(`${user.firstName} ${user.lastName}`)} />
            </HtmlTooltip>
          </Box>
        </Box>
      )}
    </Box>
  )
}
