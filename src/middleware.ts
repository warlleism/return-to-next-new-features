import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import routes from "./app/routes/private/routes";

export async function middleware(request: NextRequest) {

    const cookie = await cookies();
    const token = cookie.get('token');

    console.log(request.nextUrl.pathname)
    const protectedRoutes = routes;
    const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);

    if (isProtectedRoute && !token) {
        const url = new URL('/pages/private-routes/login', request.url);
        url.searchParams.set('unanthorized', 'true');
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/pages/private-routes/dashboard/:path*', '/pages/private-routes/settings/:path*']
}