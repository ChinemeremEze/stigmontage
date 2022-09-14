import React, { useState } from "react";
import styled from "styled-components";
const Pictures = () =>{
    const [value, setValue] = useState(0);
   
    return (
        <Album>           
            <Top>
                <Name>STIG </Name>
            </Top>
            <FullImage>
                <img src='/assets/images/welcome.jpeg' alt="ME" />
            </FullImage>

            <TripleImage>
                <img src='assets/images/mtl2.JPG' alt = "Me again" />
                <img src='assets/images/mtl3.JPG' alt = "Me again"/>
                <img src='assets/images/mtl.JPG' alt = "Me again" />
            </TripleImage> 

             <DoubleImage>
                <img src='assets/images/playboyStig.JPG' alt = "Moi" />
                <img src='assets/images/playboyStig2.JPG' alt = "J'e" />
            </DoubleImage> 
            
           
            <WideImage>
                <img src="assets/images/trapMontage.jpeg"/>
            </WideImage>
            <FullImage>
                <img src='/assets/images/Pilot.png' alt="ME" />
            </FullImage>
            {/* <SingleImage>
                <img src="assets/images/men.JPG"/>
            </SingleImage> */}
           
            {/* <TripleImage>
                <img src='assets/images/stigBrown.JPG' alt = "Me again" className="col-6"/>
                <img src='assets/images/stigBrown2.JPG' alt = "Me again" className="col-6"/>
                <img src='assets/images/stigBrown2.JPG' alt = "Me again" className="col-6"/>
            </TripleImage> */}
            {/* <ImageTwo>
                
            </ImageTwo>         */}
            
        </Album>
                
    )
}

export default Pictures;
const FullImage = styled.div`
    width: 100vw;
    height: 100vh;
    img{
        margin:0;
        padding: 0; 
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const DoubleImage = styled.div`
    width: 100vw;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
        img{ 
            margin-left: 15px; 
            padding: 0; 
            width: 30vw;
            height: 80vh;
            object-fit: cover;
        }
        @media screen and (max-width: 768px) {
            flex-direction: column;
            width: 100vw;
            height: 100vh;
            img{
                display: none
            } 
            img:nth-child(1) {
                margin: 0;
                width:100vw;
                height:100vh;
                display:block;
            }
        }
`;

const WideImage = styled.div`
    width: 100vw;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
        img{ 
            padding: 0; 
            width: 80vw;
            height: 70vh;
            object-fit: cover;
        }
        @media screen and (max-width: 768px) {
            width: 100vw;
            height: 100vh;
            img{
                margin: 0;
                width:100vw;
                height:100vh;
            } 
        }
`;

const TripleImage = styled.div`
    width: 100vw;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    img{ 
        margin-left: 15px; 
        padding: 0; 
        height: 70vh;
        object-fit: cover;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        img{
            display: none
        } 
        img:nth-child(1) {
            margin: 0;
            width:100vw;
            height:100vh;
            display:block;
        }
    }
`;
const Top = styled.div`
    position: fixed;
    display: flex;
    z-index: 2000;
    margin: 4vw 0 0 4vw;
    
`
const Name = styled.h1`
    font-size: 100pt;
    font-family: Japanese2020;
    color:black;
`

const Album = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) { 
        margin:0;
    }
    background-color: white;
   
`