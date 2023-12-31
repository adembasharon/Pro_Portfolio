import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1>Recent <span className="green">Projects</span></h1>
            <p>In my recent projects, I have leveraged the power of WordPress, React Next.js, and Node.js, along with other cutting-edge technologies, to build robust and scalable web applications with seamless integrations and exceptional user experiences.</p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 70%;
    }
    h1{
        font-size: 1rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 1rem;
        @media(max-width : 500px){
            width: 70%;
        }
    }
    
`

const Slide = styled.div``