import styled from "styled-components";

const SectionWrapper = styled.section`
    padding: 30rem 2rem;
    text-align: center;
    justify-content: center;
    h1 {
        font-size: 5rem;
    }

    h1::hover {
            transition: all 0.3s;
            transform: scale(1.3,1.3) rotation(180deg);
    }

    @media (max-width: 768px) {
        padding: 15rem 2rem;
    }
`

function Home() {

    return (    
        <SectionWrapper id="home" className="container">
            <h1>Sunny BIARD</h1>
        </SectionWrapper>
    )
}

export default Home