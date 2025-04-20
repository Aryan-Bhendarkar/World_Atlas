import { NavLink } from "react-router-dom";

export const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo-container">
                        <NavLink to="/" className="logo-link">    
                            <div className="logo">
                                <span className="logo-icon">🌍</span>
                                <h1 className="logo-text">World<span className="logo-highlight">Atlas</span></h1>
                            </div>
                        </NavLink>
                    </div>

                    <nav>
                        <ul>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/country'>Country</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
};