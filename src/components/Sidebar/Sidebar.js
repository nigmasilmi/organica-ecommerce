import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Productos</SidebarLink>
                <SidebarLink to="/">Mi Cesta</SidebarLink>
                <SidebarLink to="/">Dulce Delivery</SidebarLink>

            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Cosecha tu compra</SidebarRoute>
            </SideBtnWrap>

        </SidebarContainer>

    )
}

export default sidebar;
