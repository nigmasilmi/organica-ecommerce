import styled from 'styled-components';
import ftrImg from '../../assets/images/pexels-pixabay-209416.jpg';
// FeaturedContainer, FeaturedBtn
export const FeaturedContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0, 0, 0, 0.1)), url(${ftrImg});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1{
        font-size: clamp(3rem, 5vw, 5rem);
    }

    p{
        font-size: clamp(1rem, 3vw, 2rem);
        margin-bottom: 1rem;

    }


`;

export const FeaturedBtn = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #83A638;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover{
        background:  #F28907;
        transition: 0.2s ease-out;
        cursor: pointer;
    }

`;