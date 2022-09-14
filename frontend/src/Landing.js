import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
 const Landing = () => {
    const navigate = useNavigate();
    const handleWrapperClick = ()=>{
        let song = new Audio("assets/audio/Stig.mp3");
        song.play();
        navigate("/home");
    }
    const handleLoad = () =>{
        
    }

    return (
        <Wrapper onClick={handleWrapperClick}>
            <img src="/assets/images/stig!.gif"/>
        </Wrapper>
    )
}
export default Landing;
const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #fcfbfc;
`;