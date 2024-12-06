import React, { useEffect, useState } from 'react'
import { NewTweet } from '../Components/NewTweet'
import { AllPost } from '../Components/AllPost'

export const Wall = () => {

  const [userName, setUserName] = useState("")

  const [newTweet, setNewTweet] = useState(0)

  // similar to the event onload on a html body
  useEffect(() => {

    let user = window.localStorage.getItem("user")
    setUserName(user)

  }, [])

  return (
    <>
      <main className='container m-5'>

        <div className='row justify-content-center text-center' >
          <h1 >What is new</h1>
          <p >{userName}</p>
        </div>

        <NewTweet setNewTweet={setNewTweet}  newTweet={newTweet}/>
        <AllPost newTweet={newTweet} />
      </main>

    </>
  )
}
