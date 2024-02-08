import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies } from 'next/headers';

const r = [
    "/_next/static/css/app/layout.css",
    "/_next/static/chunks/webpack.js",
    "/_next/static/chunks/main-app.js",
    "/_next/static/chunks/app-pages-internals.js",
    "/_next/static/chunks/app/(auth)/login/page.js",
]
export function middleware(request: NextRequest) {
    if (r.includes(request.nextUrl.pathname)) return NextResponse.next();
    
    const userCookie = cookies().get("user-data");
    if (userCookie && userCookie.value) {
        if (request.nextUrl.pathname == "/login") {
            return NextResponse.redirect(new URL("/", request.url))
        }
    } else {
        if (request.nextUrl.pathname != "/login") {
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }
}
 