import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className='header-container'>
        <h1>Manigandan Nachiappan</h1>
            <li>
                <ul>Home</ul>
                <ul>About</ul>
                <ul>Resume</ul>
                <ul>Projects</ul>
                <ul>Contacts</ul>
            </li>
    </div>
  )
}

export default Header;