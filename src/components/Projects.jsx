import styled from "styled-components"
import React, { useState, useEffect} from "react";
import { prefix } from "../config";

const SectionWrapper = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
`

const ProjectsWrapper = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`

const Project = styled.div`
    padding: 1rem;
    width: calc(100% * (1/4));
    border-radius: 25px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
    background: linear-gradient(rgba(41, 38, 38) 40%, rgb(255, 226, 171) 120%);
    color: #f1ce8c;
    a {
        color: #f1ce8c;
        cursor: pointer;
    }
    img {
        width: 80%;
        height: 200px;
        object-fit: scale-down;
    }

    @media (max-width: 768px) {
        width: 100%;
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
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <a href={item.link}><img src={prefix + item.image} alt={item.text}></img></a>
                    </Project>
                ))}
            </ProjectsWrapper>
        </SectionWrapper>
    )
}

export default Projects