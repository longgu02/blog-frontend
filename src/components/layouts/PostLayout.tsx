import { Box, Grid, IconButton, Hidden, Container } from '@mui/material'
import LoginButton from '../Button/LoginButton'
import NavigationBar from '../NavigationBar'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import Link from 'next/link'
import Sidebar from '../Sidebar'
import { useState } from 'react'

export default function PostLayout(props: { children: React.ReactNode, enableToggle: boolean, sideBarContent?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  return (
    <Box>
      <Grid container>
        <Grid item xs={9}>
          <NavigationBar />
          <Container maxWidth={'md'}>{props.children}</Container>
        </Grid>
        <Grid item xs={3}>
          <Sidebar isOpen={isOpen} setIsOpen={props.enableToggle ? setIsOpen : undefined}>
            {props.sideBarContent}
          </Sidebar>
        </Grid>
      </Grid>
    </Box>
  )
}
