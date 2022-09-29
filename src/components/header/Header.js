import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRotate } from '@fortawesome/free-solid-svg-icons'
import './Header.css';



const Header = () => {
    return (
        <div className='bg-slate-800 h-24 p-6'>
            <div className='header'>
            <p><FontAwesomeIcon className='text-6xl' icon={faCameraRotate}/>
                <span className='text-3xl text-red-400 font-sans'> Click Sharp Pixel</span></p>
            </div>
        </div>
    );
};

export default Header;