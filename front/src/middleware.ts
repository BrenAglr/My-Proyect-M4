import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if ((pathname === "/shopping") && !request.cookies.get("userData")?.value) {

        const loginURL = new URL("/login", request.nextUrl.origin);
        return NextResponse.redirect(loginURL);
    }

    if ((pathname === "/register" || pathname === "/login") && request.cookies.get("userData")?.value) {

        const homeURL = new URL("/", request.nextUrl.origin);
        return NextResponse.redirect(homeURL);
    }

    return NextResponse.next();
};