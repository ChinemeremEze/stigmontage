import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./Resume";
import Home from "./Home";
import GlobalStyles from "./GlobalStyles";
const App = () => {
  return (
    <>
  <GlobalStyles/>
    <Router>
      <Routes>
        <Route exact path= "/" element={<Home/>}/> 
        <Route path= "/resume" element={<Resume/>}/> 
      </Routes>
    </Router>
    <div className="App">
      <header className="App-header">
      </header>
    </div>
    </>
  );
}
export default App;