import React, { Component } from 'react';
import Recipe from './Recipe';
import recipes from '../data/recipes';


class Recipes extends Component {

    renderRecipes() {
        const allRecipes = recipes.map((recipe, index) => {
            return (

                <Recipe recipe={recipe} key={index} />
            )
        })
        return allRecipes;
    }

    render() {
        return (
            <div className="recipes">
                <div className="recipesHeader">
                    <h1>Recipes</h1>
                </div>
                {/* This is for rendering all recipes that we already built in rebderRecipes function */}
                {this.renderRecipes()}
            </div>
        )
    }
}

export default Recipes; 