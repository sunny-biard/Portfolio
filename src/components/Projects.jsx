import styled from "styled-components";
import { useState, useEffect} from "react";
import { prefix } from "../config";

const ProjectsWrapper = styled.div`
    padding-top: 2rem;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 20px;

    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`

const ProjectCard = styled.div`
    flex-direction: column;
    justify-content: center;
    width: calc(100% * (1/4));
    height: 550px;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.5) 15px 20px 10px;
    background: linear-gradient(rgba(41, 38, 38) 40%, rgb(255, 226, 171) 120%);
    color: #f1ce8c;
    cursor: pointer;
    a {
        color: #f1ce8c;
        text-decoration: none;
        padding: 1rem;
    }
    img {
        width: 80%;
        height: 200px;
        object-fit: scale-down;
        filter: drop-shadow(1px 1px 1px #292626);
    }

    &:hover {
        transition: all 0.3s;
        transform: scale(1.1,1.1);
    }

    @media (max-width: 768px) {
        width: 80%;
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
        <section id="projects" className="container flex">
            <h2>Mes projets</h2>
            <ProjectsWrapper className="flex">
                {properties.map(item => (
                    <ProjectCard className="flex" key={item.title}>
                        <a href={item.link}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <img src={prefix + item.image} alt={item.title}/>
                        </a>
                    </ProjectCard>
                ))}
            </ProjectsWrapper>
        </section>
    )
}

export default Projects