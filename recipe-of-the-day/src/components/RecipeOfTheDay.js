import React, {Component} from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';

class RecipeOfTheDay extends Component {

    renderIngredients(){
        const ingredients = recipeOfTheDay.ingredients.map((ing,index) => {
            return (
                <Ingredient oneIngredient={ing} key={index}/>
            )
        })
        return ingredients;
    }

    render() {
        return(
            <div className="recipeOfTheDay">
            <div className="recipeOfTheDayH">
                <h2>Recipe of the Day</h2>
                {/* Getting the name of recipe, because there is only one name, no need for loop */}
                <h2>{recipeOfTheDay.name}</h2>
            </div>
            <div>
                <h3>Description: </h3>
                <p>{recipeOfTheDay.description}</p>
                <h3>Ingredients: </h3>
                {/* we declared a funtion above to iterate through all the array pof ingredients */}
                {this.renderIngredients()}
            </div>
            </div>
        )
    }
}

export default RecipeOfTheDay; 