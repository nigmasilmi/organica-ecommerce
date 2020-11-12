import React, { Component } from 'react';
import classes from './Filter.module.css';
import Button from '../../UI/Button/Button';

class Filter extends Component {

    searchHandler = () => {
        console.log('search pressed');
    }
    render() {
        return (
            <div className={classes.Filter}>
                <div className={classes.FilterResult}>{this.props.count} productos</div>
                <div className={classes.FilterSort}>
                    <p>Ordenar por</p>
                    <select value={this.props.size} onChange={this.props.exSortFilter}>
                        <option value="latest">Más reciente</option>
                        <option value="highest">Mayor a menor</option>
                        <option value="lowest">Menor a mayor</option>
                    </select>
                </div>
                <div className={classes.FilterCateg}>
                    <div className={classes.FilterCatContainer}>
                        <p>Filtrar por categoría</p>
                        <select value={this.props.category} onChange={this.props.exCategFilter}>
                            <option value="todas">Todas las Categorías</option>
                            <option value="frutos dulces">Frutos Dulces</option>
                            <option value="vegetales">Vegetales</option>
                            <option value="proteínas">Proteínas</option>
                            <option value="semillas">Semillas</option>
                            <option value="dulces y aromáticos">Dulces y Aromáticos</option>
                        </select>
                    </div>
                    <div className={classes.SearchContainer}>
                        <input type="text" placeholder="¿Qué necesitas?" />
                        <Button btnType="Search" clicked={this.searchHandler} disabled={false}>Buscar</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;