import React, { useEffect } from 'react'
import Hero from '../component/Hero'
import Support from '../component/Support'
import Card from '../component/Card'
import Midhero from '../component/Midhero'
import Card2 from '../component/Card2'
// import axios from "axios"



const Home = () => {
  useEffect(()=>{
    localStorage.setItem("isShow",false)
  },[])

  // useEffect(()=>{
  //   axios.get("http://localhost:8080")
  //   .then((res)=>{
  //     console.log(res)
  //   })
  // })
  return (
    <>

      <Hero/>
      <Support/>
      <Card/>
      <Midhero/>
      <Card2/>
 
    </>
  )
}

export default Home
