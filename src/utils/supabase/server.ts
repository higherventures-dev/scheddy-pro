// src/utils/supabase/server.ts

import { cookies, headers } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

export async function createClient() {

  const cookieStore = await cookies()
  const headerList = await headers()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {

        get(name:string){
          return cookieStore.get(name)?.value
        },

        set(
          name:string,
          value:string,
          options:any = {}
        ){
          cookieStore.set({
            name,
            value,
            ...options
          })
        },

        remove(
          name:string,
          options:any = {}
        ){
          cookieStore.set({
            name,
            value:'',
            ...options,
            maxAge:0
          })
        },

      },

      headers:{
        'x-forwarded-host':
          headerList.get('x-forwarded-host')
          ?? headerList.get('host')
          ?? '',

        'x-forwarded-proto':
          headerList.get('x-forwarded-proto')
          ?? 'https',

        'x-forwarded-for':
          headerList.get('x-forwarded-for')
          ?? '',
      },

    }
  )
}