// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    
    response.headers.append('my-custom-header', 'test');
    response.headers.append('vary', 'my-custom-header');

    return response;
}

export const config = {
    matcher: '/',
}