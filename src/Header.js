import React from 'react';
import Styles from './Header.module.css'

const Header = () => {

    return (
        <div className={Styles.header}>
            <h1>My Pokedex</h1>
        </div>
    );
}

export default Header;