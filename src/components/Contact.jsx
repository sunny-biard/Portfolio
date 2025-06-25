import styled from "styled-components";
import { prefix } from "../config";

const ContactWrapper = styled.div`
    padding-top: 2rem;
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
    img {
        width: 100%;
        height: 100%;
        filter: drop-shadow(1px 1px 1px #292626);
    }

    &:hover {
        transition: all 0.3s;
        transform: scale(1.1,1.1);
    }
`

function Contact() {

    return (
        <section id="contact" className="container flex">
            <h2>Contactez-moi</h2>
            <ContactWrapper className="flex">
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