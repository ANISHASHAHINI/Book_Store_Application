import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const { _id,book_title,authorname,category,imageurl } = useLoaderData()
  return (
    <div className=' mt-28 px-4 lg:px-24'>
       <img src={imageurl} alt="" className='h-96'/>
        <h3>{book_title}</h3>
    </div>
  )
}

export default SingleBook