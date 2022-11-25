import axios from 'axios'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPrevUrl } from 'src/redux/slices/urlSlice'

export default function middleware(req: NextRequest) {
  const { cookies } = req
  const jwt = cookies.get('user')?.value
  const url = req.url
  // const dispatch = useDispatch()
  const loginUrl = req.nextUrl.clone()
  loginUrl.pathname = '/auth/login'

  if (url.includes('/post/create')) {
    if (jwt === undefined) {
      // dispatch(setPrevUrl(url))
      return NextResponse.redirect(loginUrl)
    }

    try {
      axios.get('http://localhost:3000/auth/check', {
        headers: {
          authorization: jwt,
        },
      })
      return NextResponse.next()
    } catch (err) {
      // dispatch(setPrevUrl(url))
      return NextResponse.redirect('/auth/login')
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/post/create',
}
