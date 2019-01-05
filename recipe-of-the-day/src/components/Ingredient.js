import React, { Component } from 'react';



class Ingredient extends Component {



    render() {

        const oneIngredient = this.props.oneIngredient;
        return (
            <div className="ingredients">
                <p>{oneIngredient.ingredient} - {oneIngredient.amount}</p>
            </div>
        )
    }
}

export default Ingredient; 