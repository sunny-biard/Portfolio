import styled from "styled-components";
import { prefix } from "../config";

const ContactWrapper = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    gap: 50px;
    border-radius: 25px;
      
    @media (max-width: 768px) {
        justify-content: center;
    }
`

const ContactCard = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s;
        transform: scale(1.3,1.3);
    }
`

function Contact() {

    return (
        <section id="contact" className="container">
            <h2>Contactez-moi</h2>
            <ContactWrapper>
                <ContactCard>
                    <a href="https://www.linkedin.com/in/sunnybiard/"><img src={`${prefix}/data/images/linkedin.webp`} alt="LinkedIn"/></a>
                </ContactCard>
                <ContactCard>
                    <a href="https://github.com/sunny-biard"><img src={`${prefix}/data/images/github.webp`} alt="Github"/></a>
                </ContactCard>
            </ContactWrapper>
        </section>
    )
}

export default Contact