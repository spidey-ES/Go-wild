// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('goWild_JWT')?.value;
//   const pathname = request.nextUrl.pathname.toLowerCase();
//   const publicRoutes = ['/register'];
//   const protectedRoutes = ['/tour', '/'];

//   // if you got token and still in public routes are directed to  protected route
//   if (token && publicRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL('/home', request.url)); // protected route
//   }

//   // if you dont got a  token and still in protected routes are directed to  protected route
//   if (!token && protectedRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL('/register', request.url)); //public route
//   }

//   // Let everything else go through
//   return NextResponse.next();
// }

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('goWild_JWT')?.value;
  const pathname: string = request.nextUrl.pathname.toLocaleLowerCase();
  const protectedRoutes: string[] = [
    '/',
    '/tour',
    '/discover',
    '/contact',
    '/booking',
  ];
  const publicRoutes: string[] = ['/register'];
  if (!token && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/register', request.url));
  }
  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
