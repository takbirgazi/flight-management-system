import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value; // Retrieve token from cookies

  // Define protected routes
  const protectedRoutes = ["/addflight"];
  const authRoutes = ["/login", "/signup"]; // Routes to restrict if the user is logged in

  const currentPath = request.nextUrl.pathname;

  // If the user is accessing a protected route and no token is found, redirect to login
  if (protectedRoutes.some(route => currentPath.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // If the user is accessing auth routes (login/signup) and has a valid token, redirect to home or dashboard
  if (authRoutes.some(route => currentPath.startsWith(route))) {
    if (token) {
      return NextResponse.redirect(new URL("/addflight", request.url)); // Redirect to home or dashboard
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/addflight", "/login", "/signup"], // Protect Add Flight, Login, and Signup routes
};