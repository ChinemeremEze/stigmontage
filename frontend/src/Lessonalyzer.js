import React from 'react'
import { useEffect, useState } from 'react';
import { icons } from './data';

export default function Lessonalyzer() {
    const [lesson, setLesson] = useState(0);
    useEffect(()=>{
    },[lesson])
    const learn = () =>{
       let interval =  setInterval(function() {
            randomer(); // it excutes every 5sec
         },200);
         setTimeout(function( ) { clearInterval( interval ); }, 2000)
    }
    const randomer = () =>{
        let random = Math.floor(Math.random() * icons.length)
        console.log(random) 
        setLesson(random)
    }
  return (
    <div>
        <h1>Lessonalyzer</h1>
        <button onClick={learn}>LEarn </button>
        <p>{lesson}</p>
    </div>
  )
}
