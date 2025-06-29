import styled from "styled-components"

const AboutWrapper = styled.div`
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .verticalLine {
            display: none;
        }
    }
`

const AboutElement = styled.div`
    width: 50%;
    padding: 1rem;
    ul {
        list-style-type: none;
    }
    li {
        padding: 1rem 0;
    }
    p {
        text-align: center;
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
            <h2>A propos</h2>
            <AboutWrapper className="flex">
                <AboutElement>
                    <div>
                        <p> Actuellement en reconversion professionnelle, je suis une formation de BTS Testeur Logiciel en alternance, dispensée par OpenClassrooms.</p>
                        <p>Cette formation m'a permis d'acquérir de solides compétences, aussi bien en test qu'en développement mais aussi en gestion de projet, compétences que j'ai pu mettre en pratique au sein de mon entreprise.</p>
                        <p>Par ailleurs, cette dernière m'a permis de me spécialiser dans un aspect du métier qui me passionne : l'automatisation des tests. En effet, dans le cadre d'un projet conséquent, on m'a confié pour mission de développer, déployer et maintenir l'ensemble des tests automatisés d'un projet sous Selenium (Java), projet s'étalant sur 2 ans (toujours en cours).</p>
                    </div>
                </AboutElement>
                <div className="verticalLine"/>
                <AboutElement>
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