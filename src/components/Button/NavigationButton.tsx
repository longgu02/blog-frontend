import { SxProps, Button, Box, Theme } from '@mui/material'
import React from 'react'

export default function NavigationButton(props: {
  children: React.ReactNode
  sx?: SxProps<Theme>
}) {
  return (
    <Box sx={{ ...props.sx }}>
      <Button
        sx={{
          padding: 2,
          borderRadius: 0,
        }}
      >
        {props.children}
      </Button>
    </Box>
  )
}
