import { createClient } from 'src/services/clientRequest'
import { useAuthToken } from './useAuthToken'
import { useMemo } from 'react'
import { BLOG_ROOT_API } from 'src/constant/api'

export const useAuthClient = () => {
  const [setJwt, setRefreshToken, _jwt, _refreshToken] = useAuthToken()
  const apiConfig = useMemo(() => {
    if (_jwt) return { headers: { authorization: _jwt } }
    else return null
  }, [_jwt])
  return apiConfig ? createClient(BLOG_ROOT_API, apiConfig) : undefined
}
