import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import React from 'react'

//import { useParams } from 'react-router-dom'

const Post = () => {
 //   const params = useParams()

const navigate = useNavigate()
 const status = 200
 const handleResponse = ()=>{
    console.log("response handled")
    navigate('/about')
 }

 if(status === 404){
    return <Navigate to = '/not found' />
 }
  return (
    <><div>
          <h2> post</h2>
          <button onClick={handleResponse}> click</button>
      </div><Routes>
              <Route path='/show' element = {<h1>Hello again</h1>} />
          </Routes></>
  )
}

export default Post
