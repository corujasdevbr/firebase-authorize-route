import React from 'react'
import { useHistory } from "react-router-dom";
const Menu = () => {
    let history = useHistory();

    const sair = () => {
        localStorage.removeItem('token-firebase')
        history.push('/')
    }
    return (
        <>
           <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar w/ text</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <a href="#" onClick={sair} >Sair</a>
                        </span>
                        </div>
                    </div>
                </nav>
           </header>
        </>
    )
}

export default Menu;