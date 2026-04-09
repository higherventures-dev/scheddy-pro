import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {

  let response =
  NextResponse.next({
    request
  })

  const supabase =
  createServerClient(

    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,

    {
      cookies:{

        getAll(){
          return request.cookies.getAll()
        },

        setAll(cookiesToSet){

          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name,value)
          )

          response =
          NextResponse.next({
            request
          })

          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(
              name,
              value,
              options
            )
          )

        }

      }

    }

  )

  // IMPORTANT:
  // Use getSession NOT getUser
  // Prevents race condition after login

  const {
    data:{ session }
  } =
  await supabase.auth.getSession()

  const user =
  session?.user

  const pathname =
  request.nextUrl.pathname

  const isAuthRoute =
  pathname.startsWith('/auth')

  const isPublicRoute =
    pathname === '/'
    || pathname.startsWith('/pricing')
    || pathname.startsWith('/api')
    || pathname.startsWith('/_next')
    || pathname.startsWith('/favicon')

  // Only redirect if truly protected route

  if(
    !user &&
    !isAuthRoute &&
    !isPublicRoute
  ){

    const url =
    request.nextUrl.clone()

    url.pathname =
    '/auth/sign-in'

    return NextResponse.redirect(url)

  }

  return response

}