function Contact() {

    return (
        <section id="contact">
            <div className="container mt-3 contactContent">
                <h2 className="text-center">Contactez-moi</h2>
                <div className="row">
                    <div className="col-lg-4 mt-4 contactColumn">
                        <i className="fa-solid fa-phone fa-4x"></i>
                        <h4>Téléphone</h4>
                        <p>06-06-06-06-06</p>
                    </div>
                    <div className="col-lg-4 mt-4 contactColumn">
                        <i className="fa-regular fa-envelope fa-4x"></i>
                        <h4>Adresse email</h4>
                        <p>prénom.nom@gmail.com</p>
                    </div>
                    <div className="col-lg-4 mt-4 contactColumn">
                        <i className="fa-brands fa-linkedin-in fa-4x"></i>
                        <h4>LinkedIn</h4>
                        <p>LinkedIn Name</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact