import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    const [activeItem, setActiveItem] = useState('home');
    const [activeLang, setActiveLang] = useState('EN'); 

    const handleItemClick = (item) => {
        setActiveItem(item); 
    };


    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light-gray fixed-top">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center gap-2" href="/" onClick={() => handleItemClick('home')}>
                        <img src="../img/logo.svg" alt="OB" width="50" className='mt-2' />
                        <span className='fs-1 fw-bold'> ob </span>
                        <span className='fs-1 fw-bold'> | </span> 
                        <span className='fs-4 m-0 mt-2'>Taller de joyería</span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <Link href="/processes" className={`nav-link mx-3 my-3 my-sm-0 ${activeItem === 'processes' ? 'active' : ''}`} aria-current="page" onClick={() => handleItemClick('processes')}>Processes</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/portfolio" className={`nav-link mx-3 my-3 my-sm-0 ${activeItem === 'portfolio' ? 'active' : ''}`} aria-current="page" onClick={() => handleItemClick('portfolio')}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" className={`nav-link mx-3 my-3 my-sm-0 ${activeItem === 'contact' ? 'active' : ''}`} aria-current="page" onClick={() => handleItemClick('contact')}>Contact</Link>
                            </li>
                            
                        </ul>

                        <div className='d-flex mx-3 justify-content-center'>
                            <a className={`link-lang ${activeLang === 'EN' ? 'link-lang-active' : ''}`} onClick={() => {
                              setActiveLang('EN')  
                            }} >EN </a>
                            <p className='mx-2'> / </p>
                            <a className={`link-lang ${activeLang === 'ES' ? 'link-lang-active' : ''}`} onClick={() => {
                              setActiveLang('ES')  
                            }}> ES</a>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar