import React, { useEffect, useState } from 'react'

export const Wall = () => {

  const [userName, setUserName] = useState("")

  // similar to the event onload on a html body
  useEffect( ()=>{

    let user = window.localStorage.getItem("user")
    setUserName(user)

  }, [] )

  return (
    <>
        <h1>Welcome, {userName}</h1>
    </>
  )
}
