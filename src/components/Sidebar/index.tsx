import { Box, Grid, IconButton, Hidden, Container, Slide } from '@mui/material'
import LoginButton from '../Button/LoginButton'
import NavigationBar from '../NavigationBar'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import { SetStateAction, useState } from 'react'
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone'
export default function Sidebar(props: {
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  children: React.ReactNode
}) {
  // const [isOpen, setIsOpen] = useState<boolean | undefined>()

  // setIsOpen(props.open)

  return (
    <Box>
      {props.setIsOpen && (
        <IconButton
          sx={{ mt: 'auto', mb: 'auto' }}
          onClick={() => {
            if (props.setIsOpen) props.setIsOpen(!props.isOpen)
          }}
        >
          <ArrowForwardIosTwoToneIcon />
        </IconButton>
      )}
      <Slide direction="left" in={props.isOpen}>
        <Box sx={{ borderLeft: '1px solid #dbd9d9', height: 2000 }}>
          <Box
            sx={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'end' }}
          >
            <Hidden lgDown>
              {/* <Link  sx={{display: 'flex', mt: 'auto', mb: 'auto' }}> */}
              <IconButton sx={{ mt: 'auto', mb: 'auto' }} href="/post/create">
                <CreateOutlinedIcon />
              </IconButton>
              {/* </Link> */}
              <IconButton sx={{ mt: 'auto', mb: 'auto' }}>
                <DashboardOutlinedIcon />
              </IconButton>
              <IconButton sx={{ mt: 'auto', mb: 'auto' }}>
                <NotificationsNoneIcon />
              </IconButton>
              <IconButton sx={{ mt: 'auto', mb: 'auto' }}>
                <SettingsOutlinedIcon />
              </IconButton>
            </Hidden>
            <LoginButton sx={{ display: 'flex', justifyContent: 'end' }} />
          </Box>
          <Container maxWidth={'md'}>{props.children}</Container>
        </Box>
      </Slide>
    </Box>
  )
}
