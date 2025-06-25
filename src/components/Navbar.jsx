import { useState, useEffect } from "react";

function Navbar() {
    
    const [scroll, setScroll] = useState([]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                setScroll('navbarDark');
            } else {
                setScroll('');
            }
        });
    }, [])

    const [open, setOpen] = useState(false);

    const handleClick = () => {

        setOpen(!open);
    }

    return (
            <nav className={`navbar-dark navbar navbar-expand-lg fixed-top navbarScroll ${scroll}`}>
                <div className="container">
                    <a className={`navbar-brand ${scroll}`} href="#">Sunny BIARD</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation" open={open ? true : false}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className={`nav-link ${scroll}`} href="#home" onClick={handleClick}>Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${scroll}`} href="#about" onClick={handleClick}>A propos</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${scroll}`} href="#skills" onClick={handleClick}>Compétences</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${scroll}`} href="#projects" onClick={handleClick}>Projets</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${scroll}`} href="#contact" onClick={handleClick}>Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
    )
}

export default Navbar