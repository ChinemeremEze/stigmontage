import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Resume from "./Resume";
import Home from "./Home";
import Lessonalyzer from "./Lessonalyzer";
import GlobalStyles from "./GlobalStyles";
import Tab from "./Tab";
import Topbar from "./Topbar";
import styled from 'styled-components';
import Pictures from "./Pictures";
import Movies from "./Movies";
import ScienceStuff from "./ScienceStuff";
import Landing from "./Landing";
const App = () => {

  const [backgroundImage, setBackgroundImage] = useState('https://images.unsplash.com/photo-1550664255-94d114340500?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyNTg5OTQz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920')
    const [change, setChange] = useState("no")
    useEffect(()=>{
       fetch('https://source.unsplash.com/1920x1080/?sports,soccer,nature', {
            method: 'HEAD'
        }).then((data)=>{ 
            setBackgroundImage(data.url)
        })
        
    },[change])
  return (
    <>
  <GlobalStyles/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path= "/home" element={<Home backgroundImage={backgroundImage}/>}/> 
        <Route path= "/resume" element={<Resume backgroundImage={backgroundImage}/>}/> 
        <Route path="/lessonalyzer" element={<Lessonalyzer/>} />
        <Route path="/pictures" element={<Pictures/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/sciencestuff" element={<ScienceStuff/>} />
      </Routes>
      <div className="App">
        {/* <TopSection>
          <Topbar/>
        </TopSection> */}
        <header className="App-header">
        </header>

        <BottomSection>
          <Tab/>
        </BottomSection>
      </div>
    </Router>
    </>
  );
}
export default App;

const BottomSection = styled.div`
  //background-color: coral;
  position: fixed;
   display: flex;
   left: 50%;
 /* bring your own prefixes */
 transform: translate(-50%);
 bottom:0;
   div {
       margin: auto;
  }
  z-index: 700;
`
const TopSection = styled.div`
  //background-color: coral;
  position: fixed;
   display: flex;
   left: 90%;
 /* bring your own prefixes */
 transform: translate(50%);
 top:0;
   div {
       margin: auto;
  }
`