"use client"

import { useTheme } from "next-themes"
import { useEffect,useState } from "react"

export default function ThemeToggle(){

const {theme,setTheme}=useTheme()

const [mounted,setMounted]=useState(false)

useEffect(()=>{

setMounted(true)

},[])

if(!mounted){

return null

}

const isDark=theme==="dark"

return(

<button

onClick={()=>
setTheme(isDark?"light":"dark")
}

className="

relative
w-11
h-6
rounded-full
bg-muted
transition

"

>

<div

className={`

absolute
top-1
h-4
w-4
rounded-full
bg-white
transition

${isDark?"left-6":"left-1"}

`}

/>

</button>

)

}