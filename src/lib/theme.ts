export type Theme = "light" | "dark"

export function getSystemTheme():Theme{

if(
window.matchMedia(
'(prefers-color-scheme: dark)'
).matches
){

return "dark"

}

return "light"

}

export function applyTheme(theme:Theme){

const root=document.documentElement

if(theme==="dark"){

root.classList.add("dark")

}else{

root.classList.remove("dark")

}

localStorage.setItem("theme",theme)

}

export function loadTheme(){

const saved=localStorage.getItem("theme")

if(saved){

applyTheme(saved as Theme)

return

}

applyTheme(getSystemTheme())

}