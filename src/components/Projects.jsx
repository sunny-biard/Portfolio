import styled from "styled-components"
import React, { useState, useEffect} from "react";
import { prefix } from "../config";

const SectionWrapper = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
`

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 20px;

    @media (max-width: 768px) {
        justify-content: center;
        flex-wrap: wrap;
    }
`

const Project = styled.div`
    a {
        color: #292626;
    }
    img {
        width: 200px;
        height: 200px;
        object-fit: scale-down;
    }
`

function Projects() {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch(`${prefix}/data/portfolio.json`,
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
        <SectionWrapper id="projects" className="container">
            <h2>Mes projets</h2>
            <ProjectsWrapper>
                {properties.map(item => (
                    <Project key={item.title}>
                        <img src={prefix + item.image} alt={item.text}></img>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <a href={item.link}>Lien vers le projet</a>
                    </Project>
                ))}
            </ProjectsWrapper>
        </SectionWrapper>
    )
}

export default Projects