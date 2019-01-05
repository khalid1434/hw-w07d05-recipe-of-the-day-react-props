import React, { Component } from 'react';
import recipes from '../data/recipes';

class Recipe extends Component {

    renderRecipes() {
        const show = recipes.map((elem, index) => {
            return (

                <div key={index} className="recipe">
                    <p>Name: {elem.name}</p>
                    <p>Servings: {elem.servings}</p>
                    <p>Category: {elem.category}</p>
                </div>
            )
        })
        return show;
    }

    render() {
        const recipe = this.props.recipe;
        return (
            <div className="recipe">
                <ul>
                    <li>Name: {recipe.name}</li>
                    <li>Servings: {recipe.servings}</li>
                    <li>Category: {recipe.category}</li>
                </ul>
            </div>
        )
    }
}

export default Recipe; 