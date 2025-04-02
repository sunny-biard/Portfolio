import styled from "styled-components"
import React, { useState, useEffect} from "react";

const SectionWrapper = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
`

const ProjectsWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 50px;
    border-radius: 25px;
    background-color: #F6F6F6;
    padding: 60px;

    @media (max-width: 768px) {
        background-color: white;
        padding: 0;
      }
`

const ProjectElement = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 25px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
    }
    p {
        color: black;
        font-size: 24px;
        font-weight: 600;
        position: absolute;
        left: 20px;
        bottom: 0;
        width: 80%;
        text-shadow: 0 3px 10px black;
    }

    @media (max-width: 768px) {
        width: 100%;
      }
`

function Projects() {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('src/data/portfolio.json',
            {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            })
            .then(response => response.json())
            .then(data => {
                setProperties(data);
            })
            .catch((error) => {
                console.error(error)
            });
    }, []);

    return (
        <SectionWrapper id="portfolio">
            <h2>Mes projets</h2>
            <ProjectsWrapper>
                {properties.map(item => (
                    <ProjectElement key={item.title}>
                        <img src={item.image} alt={item.text}></img>
                        <p>{item.title}</p>
                    </ProjectElement>
                ))}
            </ProjectsWrapper>
        </SectionWrapper>
    )
}

export default Projects