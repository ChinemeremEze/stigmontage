import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { icons, scienceProjects } from './data';
import {FolderOpenOutlined, GitHub, LanguageOutlined} from '@material-ui/icons/';
import Carousel from 'react-bootstrap/Carousel'
const ScienceStuff = () => {
  useEffect(()=>{
    
  })
  const handleStars = (starsNumber)=>{
    let checked = [];
    for(let i = 0; i<starsNumber; i++){
      checked.push(i);
    }
    let unChecked = []
    for(let i = 0; i<(10 - starsNumber); i++){
      unChecked.push(i);
    }
    return { checked, unChecked }
  }
    return (
        <Wrapper>

          <Header>
              <h1>/science-stuff</h1>
              <nav>
                  <a href="#">Projects</a>
                  <a href="#">Research</a>
              </nav>
          </Header>
          
          <ProjectCarousel interval={3000} fade prevLabel="" nextLabel="">
            <Carousel.Item>
              <img 
                src="assets/images/isac.png"
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item >
              <img
                src="/assets/images/mmdb.png"
                alt="Second slide"
              />
              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item> 
              <img
                src="/assets/images/chess_1.jpg"
                alt="Third slide"
              />
              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </ProjectCarousel>

          <Projects className='row'>
            {
              scienceProjects.map((project)=>{
                return(
                  <Project id={project.title} className='col-xl-3 col-lg-5 col-md-5 col-sm-12'>
                    <ProjectIcons>
                    <FolderOpenOutlined/>
                    <ProjectLinks>
                      {project.githubLink &&
                      <a href={project.githubLink}> <GitHub/> </a>
                      }
                    {
                      project.link &&
                      <a href={project.link}> <LanguageOutlined/> </a>
                    }
                    </ProjectLinks>
                    </ProjectIcons>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectKeywords>
                    {
                      project.keywords.map((keyword)=>{
                        return <span>{'\u2B24'} {keyword} </span>
                      })
                    }
                  </ProjectKeywords>
                    <Stars>
                      <RatingStars>
                        <p>Ratings:</p> 
                        {
                          handleStars(project.rating).checked
                            .map((d) =>{
                            return <span key={d} className="fa fa-star checked"></span>
                          })
                        } 
                        {
                          handleStars(project.rating).unChecked
                            .map((d) =>{
                            return <span key={"unchecked"+d} className=" fa fa-star"></span>
                          })
                        } 
                        </RatingStars>
                      <DifficultyStars>
                        <p>Difficulty:</p> 
                        {
                          handleStars(project.difficulty).checked
                            .map((d) =>{
                            return <span key={d} className="fa fa-star checked"></span>
                          })
                        } 
                        {
                          handleStars(project.difficulty).unChecked
                            .map((d) =>{
                            return <span key={"unchecked"+d} className=" fa fa-star"></span>
                          })
                        } 
                      </DifficultyStars>
                     </Stars>
                </Project>
                );
              })
            }
          </Projects>
        </Wrapper>
    )
}

export default ScienceStuff

const Wrapper = styled.div`
    padding: 4vw;
    color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: black;
    overflow-y: auto;
    h1{
        font-size: 2em;
    }
`;

const Header = styled.header`
display: flex;
justify-content: space-between;

    nav a{
        color: white;
        padding: 10px;
    }
`;

const ProjectCarousel = styled(Carousel)`

    width: 60vw;
    height: 70vh;
    display: flex;
    align-self: center;

    div > img{
      width: 100%;
      height: 60vh;
    }
    img{
      object-fit: fill;
    }
    @media screen and (max-width: 900px) {
      width: 100%;
      height: 70%;
    }
`;

const Projects = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: space-between;
`;

const Project = styled.section`
  p{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji";
  }
  line-height: 1.5em;
  font-size: 14px;
  background-color: #0d1117;
  height: 35vh;
  margin: 2vw;
  border: 1px solid #30363d;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 16px;
  @media screen and (max-width: 1700px) {
    line-height: 1em;
  }
`;
const ProjectIcons = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProjectTitle = styled.h2`
   
    margin: 5px 0 0 0;
`;
const ProjectLinks = styled.div`
  a{
    color: white;
  }
`;
const ProjectDescription = styled.p`
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji";
  margin: 10px 0 0 0;
  font-size: 14px;
`;
const ProjectKeywords = styled.div`

  margin: 3vh 0 0 0;
  font-size: 14px;
  span{
    padding-right: 10px;
  }
`;
const Stars = styled.div`
  display: flex;
  position: absolute;
  bottom: 2vh;
    .checked{
      color: #30363d;
    }
  p{
    display:inline;
  }
`;
const RatingStars = styled.div`
margin-right: 1vw;

`;
const DifficultyStars = styled.div`
 
`;