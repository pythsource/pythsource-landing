import { NextResponse } from 'next/server'

export function middleware(request) {
  const originalUrl = request.nextUrl.clone()
  originalUrl.pathname = 'en'
  return NextResponse.redirect(originalUrl)
}

export const config = {
  matcher: '/'
}