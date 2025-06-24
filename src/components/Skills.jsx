import styled from "styled-components";
import { useState, useEffect} from "react";
import { prefix } from "../config";

const SkillsWrapper = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    gap: 50px;
      
    @media (max-width: 768px) {
        justify-content: center;
    }
`

const SkillCard = styled.div`
    flex: 0 0 30%;
    width: calc(20%);
    height: 150px;
    img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
        filter: drop-shadow(1px 1px 3px #292626);
    }

    &:hover {
        transition: all 0.3s;
        transform: scale(1.2,1.2) rotate(10deg);
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