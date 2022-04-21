import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components';
const Home =() => {
    const [backgroundImage, setBackgroundImage] = useState('https://images.unsplash.com/photo-1550664255-94d114340500?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyNTg5OTQz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920')
    useEffect(()=>{
        const result =  fetch('https://source.unsplash.com/1920x1080/?sports,soccer,nature', {
            method: 'HEAD'
        }).then((data)=>{ 
            setBackgroundImage(data.url)
            console.log(data.url)
        })
        
    }, [])
  return (
    <div>
        <BgImage src={backgroundImage}/>
    Home</div>
  )
}
const BgImage = styled.img`
    position: fixed;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;

`
export default Home