import styled from "styled-components"
import React, { useState, useEffect} from "react";

const SectionWrapper = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
`

const SkillsWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 50px;
    border-radius: 25px;
    background-color: #F6F6F6;
    padding: 60px;
`

const SkillCard = styled.div`
    width: 100px;
    height: 100px;
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
         getSkills('src/data/devSkills.json', setdevSkills)
         getSkills('src/data/testSkills.json', setTestSkills)
         getSkills('src/data/otherSkills.json', setOtherSkills)
    }, []);

    return (
        <SectionWrapper id="skills">
            <h2>Mes compétences</h2>
            <SkillsWrapper>
                {skills.map(item => (
                    <SkillCard key={item.title}>
                        <img src={item.image} alt={item.title}></img>
                    </SkillCard>
                ))}
            </SkillsWrapper>
        </SectionWrapper>
    )
}

export default Skills