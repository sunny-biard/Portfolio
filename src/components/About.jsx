import styled from "styled-components"

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`

const AboutElement = styled.div`
    width: 50%;
    padding: 1rem;
    p {
        text-align: justify;
    }

    @media (max-width: 768px) {
        width: 100%
    }
`

const ListWrapper = styled.ul`
    display: inline-block;
`

function About() {

    return (
        <section id="about" className="container">
            <AboutWrapper>
                <AboutElement>
                    <h2>A propos</h2>
                    <div>
                        <p> Actuellement en reconversion professionnelle, je termine actuellement ma formation de BTS Testeur Logiciel en alternance, dispensée par OpenClassrooms.</p>
                        <p>Cette formation m'a permis d'acquérir de solides compétences, aussi bien en test qu'en développement mais aussi en gestion de projet, compétences que j'ai pu mettre en pratique au sein de mon entreprise.</p>
                        <p>Par ailleurs, cette dernière m'a permis de me spécialiser dans un aspect du métier qui me passionne : l'automatisation des tests. En effet, dans le cadre d'un projet conséquent, on m'a confié pour mission de développer, déployer et maintenir l'ensemble des tests automatisés d'un projet sous Selenium (Java), projet s'étalant sur 2 ans (toujours en cours).</p>
                    </div>
                </AboutElement>
                <AboutElement>
                    <h2>Formation</h2>
                    <ListWrapper>
                        <li>
                            <p>BTS Testeur Logiciel</p>
                            <p className="italic">(2023 - Aujourd'hui)</p>
                        </li>
                        <li>
                            <p>Double Licence Économie-Gestion</p>
                            <p className="italic">(2020 - 2023)</p>
                        </li>
                        <li>
                            <p>Licence Informatique</p>
                            <p className="italic">(2017 - 2020)</p>
                        </li>
                    </ListWrapper>
                </AboutElement>
            </AboutWrapper>
        </section>
    )
}

export default About