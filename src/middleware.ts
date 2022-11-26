import axios from 'axios'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPrevUrl } from 'src/redux/slices/urlSlice'

export default async function middleware(req: NextRequest) {
  const { cookies } = req
  const jwt = cookies.get('user')?.value
  const url = req.url
  await cookies.set('prevUrl', url)
  // const dispatch = useDispatch()
  const loginUrl = req.nextUrl.clone()
  loginUrl.pathname = '/auth/login'

  if (url.includes('/post/write')) {
    if (jwt === undefined) {
      // dispatch(setPrevUrl(url))
      const loginRes = NextResponse.redirect(loginUrl)
      loginRes.cookies.set('prevUrl', url)
      return loginRes
    }

    try {
      axios.get('http://localhost:3000/auth/get-user', {
        headers: {
          authorization: jwt,
        },
      })
      return NextResponse.next()
    } catch (err) {
      // dispatch(setPrevUrl(url))
      const loginRes = NextResponse.redirect(loginUrl)
      loginRes.cookies.set('prevUrl', url)
      return loginRes
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/post/write',
}
