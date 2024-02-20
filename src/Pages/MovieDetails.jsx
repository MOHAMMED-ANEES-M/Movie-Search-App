import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  
const {id}=useParams()
console.log(id,'id of movie');
const [data,setdata]=useState('')

useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=3e376686`)
        console.log(response.data);
        setdata(response.data)
    }
    fetchdata()
},[])

  return (
    <div className='text-white p-5 text-center '>
      <img src={data.Poster} alt="" className='mb-5'/>
      <h3 className='text-start '>Title : {data.Title}</h3>
      <h3 className='text-start '> Director : {data.Director}</h3>
      <h3 className='text-start '> Language : {data.Language}</h3>
      <h3 className='text-start '> Country : {data.Country}</h3>
      <h3 className='text-start '>Actors : {data.Actors}</h3>
      <h3 className='text-start '> Plot : {data.Plot}</h3>
    </div>
  )
}

export default MovieDetail
