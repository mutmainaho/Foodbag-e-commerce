import React, { Component } from 'react';
import './Home.css';
import Select from '../Location/Select';
import Interest from '../Interest/Interest';
import fastFood from '../Images/fast-food.svg';
import vegetablesDrinks from '../Images/Vegetables _ Drinks.svg';
import drinksCocktails from '../Images/Drinks _ Cocktails.svg';
import restaurant from '../Images/resturant.svg';
import Service from '../Service/Service';
import illustrator1 from '../Images/Illustration_1.svg';
import illustrator2 from '../Images/illustration_2.svg';
import illustrator3 from '../Images/illustration_3.svg';





const Home = () => {
  return (
    <div>
       
      <div className="container">
        <h1>FOODBAG</h1>
        <p>Anything food, we have you covered.</p>
      </div>
      <section className="container-2">
        
      <p className = "text">Pick an interest</p>

      <div className="row" >
        <div className="col-sm-3">
        <div className="card " >
        <img src={fastfood} class="card-img-top" alt="fastfood"/>
        <div className="card-body">
          <h5 className="card-title">Fast Food</h5>
          <p className="card-text">All sorrow are less with bread</p>
        </div>
      </div>
        </div>
    
        <div className="col-sm-3">
        <div className="card">
        <img  src={VegetablesDrinks} class="card-img-top" alt="vegetables&fruit"/>
        <div className="card-body">
          <h5 className="card-title">Vegetable & Fruit</h5>
          <p className="card-text">May not want it,but good for you.</p>
        </div>
      </div>
        </div>
      
        <div className="col-sm-3">
        <div className="card">
        <img  src={drinksCocktails} class="card-img-top" alt="Drinks&cocktails"/>
        <div className="card-body">
          <h5 className="card-title">Drinks & Cocktails</h5>
          <p className="card-text">I feel sad for who don't drink.</p>
        </div>
      </div>
        </div>
        
        <div className="col-sm-3">
        <div className="card">
        <img  src={resturant} class="card-img-top" alt="resturant"/>
        <div className="card-body">
          <h5 className="card-title">Resturant</h5>
          <p className="card-text">All sorrows are less with bread.</p>
        </div>
      </div>
        </div>
        </div>  
   </section> 


<section className="container-text">
  <h4>HOW WE SERVE YOU</h4>
  <div className="row">
    <div className="col-sm-4">
    <img  src={illustrator1} alt="illustration"/>

      <h5>Tell us where you are</h5>
      <p>select the location you want us to deliver</p>
    </div>
    <div className="col-sm-4">
    <img  src={illustrator2} alt="illustration"/>
      <h5>Tell us what you want</h5>
      <p>Browse the type of food that interest you</p>
    </div>
    <div className="col-sm-4">
    <img  src={illustrator3} alt="illustration"/>
      <h5>We'll come running</h5>
      <p>your order will be delivered to you in no time</p>
    </div>
  </div>
</section>


    </div>
  );
}

export default Home;
