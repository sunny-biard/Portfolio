import styled from "styled-components"
import React, { useState, useEffect} from "react";
import { prefix } from "../config";

const SkillsWrapper = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    gap: 50px;
    border-radius: 25px;
    padding: 60px;
      
    @media (max-width: 768px) {
        justify-content: center;
    }
`

const SkillCard = styled.div`
    width: calc(100% * (1/4));
    height: 200px;
    border-radius: 25px;
    img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }
`

function Skills() {

    const [devSkills, setdevSkills] = useState([]);
    const [testSkills, setTestSkills] = useState([]);
    const [otherSkills, setOtherSkills] = useState([]);
    
    const skills = [...devSkills, ...testSkills, ...otherSkills];

    const getSkills = async (url, callback) => {
        fetch(url,
            {
             headers : { 
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             }
             })
             .then(response => response.json())
             .then(data => {
                 callback(data);
             })
             .catch((error) => {
                 console.error(error)
             });
    }
    
    useEffect(() => {
         getSkills(`${prefix}/data/devSkills.json`, setdevSkills)
         getSkills(`${prefix}/data/testSkills.json`, setTestSkills)
         getSkills(`${prefix}/data/otherSkills.json`, setOtherSkills)
    }, []);

    return (
        <section id="skills" className="container">
            <h2>Mes compétences</h2>
            <SkillsWrapper>
                {skills.map(item => (
                    <SkillCard key={item.title}>
                        <img src={prefix + item.image} alt={item.title}></img>
                    </SkillCard>
                ))}
            </SkillsWrapper>
        </section>
    )
}

export default Skills