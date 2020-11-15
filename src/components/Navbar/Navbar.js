import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Orgánica</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default navbar;