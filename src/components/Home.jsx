import styled from "styled-components"

const SectionWrapper = styled.section`
    padding: 25rem 2rem;
    text-align: center;
    justify-content: center;

    @media (max-width: 768px) {
        padding 15rem 2rem;
    }
`

const TitleWrapper = styled.div`
h1 {
    font-size: 5rem;
    padding-bottom: 5rem;
}
h2 {
    font-size: 2.5rem;
}
`

function Home() {

    return (    
        <SectionWrapper id="home" className="container">
            <TitleWrapper>
                <h1>Sunny BIARD</h1>
                <h2>Étudiant en Test Logiciel</h2>
            </TitleWrapper>
        </SectionWrapper>
    )
}

export default Home