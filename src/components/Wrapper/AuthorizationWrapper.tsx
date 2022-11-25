import { Box } from '@mui/material'
import axios from 'axios'
import { redirect } from 'next/dist/server/api-utils'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CircularProgress } from '@mui/material'

export default function AuthorizationWrapper(props: {
  children: React.ReactNode
  authorization?: string
}) {
  const [isAuthor, setAuthor] = useState<boolean>(false)
  const [isLoading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    if (props.authorization) {
      axios
        .get('http://localhost:3000/auth/check', {
          headers: {
            authorization: props.authorization,
          },
        })
        .catch((err) => router.push('/auth/login'))
    } else {
      router.push('/auth/login')
    }
    setLoading(false)
  }, [props.authorization, router])
  return (
    <Box>
      {isLoading ? (
        <CircularProgress
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        />
      ) : (
        props.children
      )}
    </Box>
  )
}
