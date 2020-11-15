import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
// SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute 

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 300px;
    height: 100%;
    background: #F28907;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
    
    @media screen and (max-width: 400px){
        width: 100%;
    }

`;


export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 1.6rem;
    cursor: pointer;
    outline: none;

`;


export const CloseIcon = styled(FaTimes)`
    color: #fff;
  
`;


export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

    @media screen and (max-width: 400px){
        grid-template-rows: repeat(3, 60px);
    }
`;


export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #F22929;
        transition: 0.2s ease-in-out;
    }
`;


export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    
`;


export const SidebarRoute = styled(Link)`
    background: #83A638;
    white-space: nowrap;
    padding: 10px 64px;
    color:#fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2 ease-in-out;
    text-decoration: none;

    &:hover{
        transition: 0.2 ease-in-out;
        background: #fff;
        color: #83A638;
    }

`;