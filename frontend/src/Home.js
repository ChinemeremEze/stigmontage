import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { icons } from './data';
const Home =({backgroundImage}) => {
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
                        <a href={icon.link} target={ icon.external? "_blank": ""}>
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
    opacity: 0.9;
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
        width: 60px;
        height: 60px;
    }
`
const Icon = styled.div`
display: inline-block;
margin: 4vh 0;
@media(max-width:600px){
    margin: 2vw 0;

}
`
export default Home