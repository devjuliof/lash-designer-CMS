import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken');

  if (!token && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/calendar',
  ],
}