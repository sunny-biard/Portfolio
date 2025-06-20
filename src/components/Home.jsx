import styled from "styled-components"

const SectionWrapper = styled.section`
    padding: 25rem 2rem;
    text-align: center;
    justify-content: center;
    h1 {
        font-size: 5rem;
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