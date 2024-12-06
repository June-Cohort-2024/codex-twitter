import React, { useEffect, useState } from 'react'
import { PostsCardTemplate } from './PostsCardTemplate'

export const AllPost = ({newTweet}) => {

    const [posts, setPosts] = useState([])
    const url  = import.meta.env.VITE_URL
    const token = import.meta.env.VITE_TOKEN

    const getPosts = async ()=>{
        let newURL = `${url}/twitter_posts?id=`

        let response  = await fetch(newURL, {
            method : "GET", 
            headers : {
                "Authorization" : token, 
                "apikey" : token
            }
        })

        let data = []

        if (response.ok){
            data = await response.json()
            setPosts(data)

        }else{
            let err = await response.json()
            console.log("error fetch posts")
            console.log (err)
        }

        
    }

    useEffect(() => {

        getPosts()

    }, [newTweet])

    return (
        <>
            {
                posts.map((item) => (
                    <PostsCardTemplate key = {item.id} item={item}  />

                ))
            }
        </>

    )
}
