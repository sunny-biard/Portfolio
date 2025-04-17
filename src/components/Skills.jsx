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

    @media (max-width: 768px) {
        background-color: white;
        padding: 0;
      }
`

const SkillCard = styled.div`
    position: relative;
    width: 200px;
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

function Skills() {

    const [devSkills, setdevSkills] = useState([]);
    
    useEffect(() => {
         fetch('src/data/devSkills.json',
               {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
                })
                .then(response => response.json())
                .then(data => {
                    setdevSkills(data);
                })
                .catch((error) => {
                    console.error(error)
                });
    }, []);

    const [testSkills, setTestSkills] = useState([]);

    useEffect(() => {
        fetch('src/data/testSkills.json',
              {
               headers : { 
                   'Content-Type': 'application/json',
                   'Accept': 'application/json'
               }
               })
               .then(response => response.json())
               .then(data => {
                   setTestSkills(data);
               })
               .catch((error) => {
                   console.error(error)
               });
   }, []);

   const [otherSkills, setOtherSkills] = useState([]);
    
   useEffect(() => {
        fetch('src/data/otherSkills.json',
              {
               headers : { 
                   'Content-Type': 'application/json',
                   'Accept': 'application/json'
               }
               })
               .then(response => response.json())
               .then(data => {
                   setOtherSkills(data);
               })
               .catch((error) => {
                   console.error(error)
               });
   }, []);

    return (
        <SectionWrapper id="skills">
            <h2>Mes compétences</h2>
            <SkillsWrapper>
                {devSkills.map(item => (
                    <SkillCard key={item.title}>
                        <img src={item.image} alt={item.title}></img>
                    </SkillCard>
                ))}
                {testSkills.map(item => (
                    <SkillCard key={item.title}>
                        <img src={item.image} alt={item.title}></img>
                    </SkillCard>
                ))}
                {otherSkills.map(item => (
                    <SkillCard key={item.title}>
                        <img src={item.image} alt={item.title}></img>
                    </SkillCard>
                ))}
            </SkillsWrapper>
        </SectionWrapper>
    )
}

export default Skills