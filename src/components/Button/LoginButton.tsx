import { Button, Typography, SxProps, Theme, Box } from '@mui/material'

export default function LoginButton(props: { sx?: SxProps<Theme> }) {
  return (
    <Box sx={{ ...props.sx }}>
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
        <Typography
          variant="body2"
          sx={(theme) => ({
            // color: theme.palette.text.secondary,
          })}
        >
          Sign In
        </Typography>
      </Button>
    </Box>
  )
}
