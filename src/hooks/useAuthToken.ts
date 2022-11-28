import { useMemo } from 'react'
import { useCookies } from 'react-cookie'
export const useAuthToken = (jwt?: string, refreshToken?: string) => {
  const [cookie, setCookie, removeCookie] = useCookies(['user'])
  const setJwt = (jwt: string) => {
    setCookie('user', jwt, {
      path: '/',
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    })
  }
  const setRefreshToken = (refresh: string) => {
    if (typeof window !== 'undefined') localStorage.setItem('refresh', refresh)
  }

  if (jwt) setJwt(jwt)
  if (refreshToken) setRefreshToken(refreshToken)

  const _jwt = useMemo(() => {
    if (jwt) return jwt
    if (cookie['user']) return cookie['user']
    return undefined
  }, [cookie, jwt])
  const _refreshToken = useMemo(() => {
    if (refreshToken) return refreshToken
    if (typeof window !== 'undefined') {
      const rt = localStorage.getItem('refresh')
      if (rt) return rt
      return undefined
    }
  }, [refreshToken])
  return [setJwt, setRefreshToken, _jwt, _refreshToken]
}
