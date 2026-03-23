'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { SubmitButton } from '@/components/submit-button'
import { signInAction } from '@/app/actions'
import Image from 'next/image'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginClient({
  successMessage,
  nextPath = '/dashboard',
}: {
  errorMessage?: string
  successMessage?: string
  nextPath?: string
}) {

  const [ok] = useState(successMessage)

  const [showPassword,setShowPassword]=useState(false)

  return (

<div className="w-full">

<form

id="login-form"

action={signInAction}

className="

flex
flex-col

w-full

bg-card
border
border-border

rounded-xl

shadow-xl

p-6
sm:p-8

space-y-6

"

noValidate

>

{/* BRAND */}

<div className="flex flex-col items-center space-y-2">

<div className="flex items-center gap-2">

<Image
src="/assets/images/logo.svg"
alt="Scheddy logo"
width={28}
height={28}
priority
className="h-7 w-7"
/>

<h1 className="text-xl font-medium">

scheddy

</h1>

</div>

<p className="text-sm text-muted-foreground">

Sign in to your account

</p>

</div>

{ok && (

<div className="rounded-md border border-green-300 bg-green-50 p-3 text-sm text-green-800">

{ok}

</div>

)}

<div className="flex flex-col gap-4">

{/* EMAIL */}

<div className="space-y-2">

<Label htmlFor="email">

Email

</Label>

<Input

id="email"

name="email"

placeholder="you@example.com"

type="email"

required

aria-describedby="email-error"

className="h-11"

/>

<p

id="email-error"

className="text-[11px] text-red-400 hidden"

/>

</div>

{/* PASSWORD */}

<div className="space-y-2">

<Label htmlFor="password">

Password

</Label>

<div className="relative">

<Input

id="password"

name="password"

placeholder="Your password"

required

type={showPassword?'text':'password'}

className="h-11 pr-10"

aria-describedby="password-error"

/>

<button

type="button"

onClick={()=>
setShowPassword(v=>!v)
}

className="

absolute
right-3
top-1/2
-translate-y-1/2

text-muted-foreground

hover:text-foreground

"

aria-label={
showPassword
?'Hide password'
:'Show password'
}

>

{showPassword
?
<EyeOff className="h-4 w-4"/>
:
<Eye className="h-4 w-4"/>
}

</button>

</div>

<p

id="password-error"

className="text-[11px] text-red-400 hidden"

/>

</div>

<input
type="hidden"
name="next"
value={nextPath}
/>

<Link

className="text-xs text-muted-foreground underline"

href="/auth/forgot-password"

>

Forgot password?

</Link>

<p className="text-xs text-muted-foreground">

Don't have an account?{" "}

<Link

className="font-medium underline"

href="/auth/sign-up"

>

Sign up

</Link>

</p>

<SubmitButton

className="

mt-2

h-11
w-full

"

>

Log in

</SubmitButton>

</div>

{/* FOOTER */}

<div

className="

text-center
text-xs
text-muted-foreground

pt-4

border-t
border-border

"

>

© Scheddy

</div>

</form>

</div>

)

}