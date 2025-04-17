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
    padding: 60px;

    @media (max-width: 768px) {
        padding: 0;
      }
`

const Project = styled.div`
    width: 200px;
    height: 200px;
        
    @media (max-width: 768px) {
        width: 100%;
      }
`

const ProjectCard = styled.div`
    position: relative;
    width: 250px;
    height: 200px;
    border-radius: 25px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
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
        <SectionWrapper id="projects">
            <h2>Mes projets</h2>
            <ProjectsWrapper>
                {properties.map(item => (
                    <Project key={item.title}>
                        <ProjectCard>
                            <img src={item.image} alt={item.text}></img>
                        </ProjectCard>
                        <p>{item.title}</p>
                        <p>{item.text}</p>
                        <a href={item.link}>Lien vers le projet</a>
                    </Project>
                ))}
            </ProjectsWrapper>
        </SectionWrapper>
    )
}

export default Projects