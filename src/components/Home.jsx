import styled from "styled-components";

const SectionWrapper = styled.section`
    padding: 30rem 2rem;
    text-align: center;
    justify-content: center;
    h1 {
        font-size: 5rem;
    }
    h2 {
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        padding: 20rem 2rem;
    }
`

function Home() {

    return (    
        <SectionWrapper id="home" className="container flex">
            <h1>Sunny BIARD</h1>
            <h2>Testeur Logiciel</h2>
        </SectionWrapper>
    )
}

export default Home