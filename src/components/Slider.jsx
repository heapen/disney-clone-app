import React, { useEffect } from 'react'
import GlobalApi from '../Api/GlobalApi'

const Slider = () => {
    useEffect(() => {
        getTrendingMovies();
    },[])
    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp)
        })
    } 
  return (
    <div>
      
    </div>
  )
}

export default Slider
