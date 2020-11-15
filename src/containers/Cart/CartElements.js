import styled from 'styled-components';
// CartWrapper, CartHeader, CartBody

export const CartWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;


`;

export const CartHeader = styled.div`
    background: #F28907;
    height: 3rem;
    color: white;
`;

export const CartBody = styled.div`
    background: beige;
    color: rgb(24,24,24);
`;