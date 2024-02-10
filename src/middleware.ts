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
    const path = request.nextUrl.pathname;
    if (r.includes(path)) return NextResponse.next();
    
    const userCookie = cookies().get("user-data");
    if (userCookie && userCookie.value) {
        if (path == "/login") {
            return NextResponse.redirect(new URL("/", request.url))
        }
    } else {
        if (path != "/login") {
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }
}
 