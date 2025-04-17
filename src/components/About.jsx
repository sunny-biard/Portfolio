import profilePicture from "../data/images/person.png"

function About() {

    return (
        <section id="about">
            <div className="container mt-4 pt-4">
                <h2 className="text-center">A propos</h2>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <img src={profilePicture} className="imageAboutPage" alt="Photo de profil"></img>
                    </div>
                    <div className="col-lg-8">
                        <div className="row mt-3">
                            <p> Actuellement en reconversion professionnelle, je termine actuellement ma formation de BTS Testeur Logiciel en alternance dispensée par OpenClassrooms.
                            Cette formation m'a permis d'acquérir de solides compétences aussi bien en test qu'en développement mais aussi en gestion de projet, compétences que j'ai pu mettre en pratique au sein de mon entreprise.
                            Par ailleurs, cette dernière m'a permis de me spécialiser dans un aspect du métier qui me passionne : l'automatisation des tests. En effet, dans le cadre d'un projet conséquent, on m'a confié pour mission de développer, déployer et maintenir l'ensemble des tests automatisés d'un projet sous Selenium (Java), projet s'étalant sur 2 ans (toujours en cours).
                            </p>
                        </div>
                        <div>
                            <p> Formation :
                                <li>BTS Testeur Logiciel (2024 - Aujourd'hui)</li>
                                <li>Double Licence Économie-Gestion (2020 - 2023)</li>
                                <li>Licence Informatique (2017 - 2020)</li>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About