import React from 'react';
import { FeaturedContainer, FeaturedBtn } from './FeaturedElements';

const featured = (props) => {
    return (
        <FeaturedContainer>
            <h1>Duraznos Dorados</h1>
            <p>Cosecha Primavera 2020. Conserveros, Melocotones, Nectarines</p>
            <FeaturedBtn>Añadir a la cesta</FeaturedBtn>
        </FeaturedContainer>
    )
};

export default featured;
