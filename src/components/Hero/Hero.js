import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';
import Sidebar from '../Sidebar/Sidebar';
const Hero = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSideMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggleSideMenu} />
            <Sidebar isOpen={isOpen} toggle={toggleSideMenu} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Lo más natural </HeroH1>
                    <HeroP>de los campos suramericanos</HeroP>
                    <HeroBtn>Descubrir</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
