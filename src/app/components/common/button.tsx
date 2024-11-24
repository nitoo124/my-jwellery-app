import React from 'react'

interface button {
    text : string,
    bg: string,
    textcolor : string
}
function Button({text, bg, textcolor}:button) {
  return (
    <button className={`py-2 md:px-5 px-2 rounded-xl 
      md:font-bold font-semibold md:text-lg text-sm ${bg} ${textcolor}
      hover:bg-zinc-400  hover:text-black text-center ${bg} ${textcolor}`} >
        {text}</button>
  )
}

export default Button