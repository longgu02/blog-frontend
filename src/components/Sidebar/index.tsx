import { Box, IconButton, Hidden, Container, Slide } from '@mui/material'
import LoginButton from '../Button/LoginButton'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone'
export default function Sidebar(props: {
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  children: React.ReactNode
}) {
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
            <LoginButton sx={{ display: 'flex', justifyContent: 'end' }} />
            <IconButton sx={{ mt: 'auto', mb: 'auto' }}>
              <SettingsOutlinedIcon />
            </IconButton>
          </Box>
          <Container maxWidth={'md'}>{props.children}</Container>
        </Box>
      </Slide>
    </Box>
  )
}
