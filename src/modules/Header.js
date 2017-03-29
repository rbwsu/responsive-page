import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="spaceOut">
                <h2>LOGO</h2>
                <nav className="navigation">
                    <a className="nav-toggle" href="#">
                        <span className="trigger">&#9776;</span>
                        <ul>
                            <li>Home</li>
                            <li>Contact Us</li>
                            <li>Prices</li>
                            <li>Cart</li>
                        </ul>
                    </a>
                </nav>
                </div>
            </header>
        );
    }
}

export default Header;