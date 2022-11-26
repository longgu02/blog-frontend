import { Paper } from '@mui/material'

export default function AuthLayout(props: { children: React.ReactNode }) {
  return (
    <Paper
      sx={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#CDF0EA',
        p: 2,
      }}
    >
      {props.children}
    </Paper>
  )
}
