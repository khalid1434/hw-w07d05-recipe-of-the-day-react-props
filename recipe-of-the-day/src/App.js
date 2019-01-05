import React, { Component } from 'react';
import './App.css';
import Recipes from './components/Recipes';
import RecipeOfTheDay from './components/RecipeOfTheDay';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Recipes/>
      <RecipeOfTheDay/>
      </div>
    );
  }}

  export default App;
  