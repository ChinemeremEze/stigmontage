import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./Resume";
import Home from "./Home";
import Lessonalyzer from "./Lessonalyzer";
import GlobalStyles from "./GlobalStyles";
import Tab from "./Tab";
import Topbar from "./Topbar";
import styled from 'styled-components';

const App = () => {
  return (
    <>
  <GlobalStyles/>
    <Router>
      <Routes>
        <Route exact path= "/" element={<Home/>}/> 
        <Route path= "/resume" element={<Resume/>}/> 
        <Route path="/lessonalyzer" element={<Lessonalyzer/>} />
      </Routes>
      <div className="App">
        <TopSection>
          <Topbar/>
        </TopSection>
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