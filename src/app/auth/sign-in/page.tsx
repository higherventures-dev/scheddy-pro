// app/auth/sign-in/page.tsx  (SERVER COMPONENT)

import LoginClient from './LoginClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

type Props = {
  searchParams?: Promise<
    Record<string,string | string[] | undefined>
  >
}

export default async function Page({ searchParams }:Props){

  const params =
  searchParams
  ? await searchParams
  : {}

  const error =
  typeof params?.error === 'string'
  ? params.error
  : undefined

  const success =
  typeof params?.success === 'string'
  ? params.success
  : undefined

  const next =
  typeof params?.next === 'string'
  ? params.next
  : '/dashboard'

  return (
    <LoginClient
      errorMessage={error}
      successMessage={success}
      nextPath={next}
    />
  )
}