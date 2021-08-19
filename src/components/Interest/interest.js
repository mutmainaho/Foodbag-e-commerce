import react from 'React';
import './intrest.css';
import fastFood from '../../Images/fast-food.svg';
import vegetablesDrinks from '../../Images/Vegetables _ Drinks.svg';
import drinksCocktails from '../../Images/Drinks _ Cocktails.svg';
import restaurant from '../../Images/resturant.svg';


const intrest= () => {
    return(
      
        <div>
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

        </div>
    )

}
export default intrest;