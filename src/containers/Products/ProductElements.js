import styled from 'styled-components';
import imgBg from '../../assets/images/pexels-karolina-grabowska-4022107.jpg';

export const ProductsContainer = styled.div`
    background: linear-gradient(to right, rgba(245, 245, 220, 0.7), rgba(245, 245, 220, 0.7)), url(${imgBg});
    background-repeat: no repeat;
    background-size: cover;
    width: 100%;
    /* height: 100vh; */
    padding: 5rem calc(100vw - 1300px)/2;
    /* background: #a7e02a; */
    /* background: beige; */
    color: beige;
`;


export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 2rem;
    padding: 0.5rem;
    color: #F28907;
    text-transform: uppercase;
`;


export const ProductWrapper = styled.div`
    display: flex;
    /* flex: 0 1 23rem; */
    flex-wrap:wrap;
    margin:0 auto;
    justify-content: center;

`;

export const ProductCard = styled.div`
    margin: 0 2rem;
    /* line-height: 2; */
    padding: 1rem;
    margin: 1rem;
    border-radius: 3px;
    max-width: 350px;
    background: rgba(245, 245, 220, 0.3);
    /* background: transparent; */
    color: rgb(24,24,24);
    box-shadow: 0px 3px 4px #688d18;


`;

export const ProductImg = styled.img`
    max-height: 13rem;
    min-width: 100%;
    box-shadow: 0px 3px 4px #83A638;
    
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding: 2rem;
    text-align: center;

`;

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;

`;

export const ProductDsc = styled.p`
    margin-bottom: 1rem;
    color: rgb(61, 55, 55);
    font-family: 'Abel', sans-serif;
    font-size: 1rem;

`;

export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 1.3rem;


`;


export const ProductBtn = styled.div`
    text-align: center;
    font-size: 1rem;
    padding: 1rem 3rem;
    border: none;
    background: #688d18;
    color: beige;
    transition: 0.2s ease-out;

    &:hover{
        background: #F28907;
        transition: 0.2 ease-out;
        cursor: pointer;

    }
`;
