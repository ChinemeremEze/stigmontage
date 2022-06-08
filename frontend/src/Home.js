import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { icons } from './data';
const Home =() => {
    const [backgroundImage, setBackgroundImage] = useState('https://images.unsplash.com/photo-1550664255-94d114340500?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyNTg5OTQz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920')
    const [change, setChange] = useState("no")
    useEffect(()=>{
        const result =  fetch('https://source.unsplash.com/1920x1080/?sports,soccer,nature', {
            method: 'HEAD'
        }).then((data)=>{ 
            setBackgroundImage(data.url)
            console.log(data.url)
        })
        
    },[change])
  return (
      <>
        <div>
            <BgImage src={backgroundImage}/>
        </div>
        <Icons className='row'>
            {
                icons.map((icon)=>{
                    return (
                        <Icon id="desktop-instagram" className="desktop-shortcut col-3 ">
                        <a href={icon.link} target="_blank">
                            <img src={icon.image}/>
                            <p> {icon.name}</p>
                        </a>
                    </Icon>
                    )
                })
            }
        </Icons>
    </>
  )
}
const BgImage = styled.img`
    position: fixed;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
`
const Icons = styled.div`
    width: 100%;
    height: 100%;
    
    text-align: center;
    display: flex;
    margin: auto;
    color: white;
    a{
        color: white;
        text-decoration: none;
        cursor: url(https://dwvo2npct47gg.cloudfront.net/images/awge-pointer-small.png) 10 0,pointer;

    }
    img{
        cursor: url(https://dwvo2npct47gg.cloudfront.net/images/awge-pointer-small.png) 10 0,pointer;
        //border: 2px solid green;
        width: 80px;
        height: 80px;
    }
`
const Icon = styled.div`
display: inline-block;
margin: 45px 0;
`
export default Home