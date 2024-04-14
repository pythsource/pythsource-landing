import { NextResponse } from 'next/server'

export function middleware(request) {
  let url = request.nextUrl.clone()
  if (url.pathname.startsWith('/en') || url.pathname.startsWith('/ru')) return

  url.pathname = `/en${url.pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|images|sitemap|robots|favicon).*)']
}