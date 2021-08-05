
import './App.css';


function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar navbar-expand-lg">
          <h1>FOOD BLOG</h1>
          <ul className="navbar-nav">
            <li className="navbar-item">Cart</li>
            <li className="navbar-item">Login</li>
            <button class="btn btn-outline-success" type="submit">Sign up</button>
            
          </ul>
        </nav>
      </header>
      <div className="container">
        <h1>FOODBAG</h1>
        <p>Anything food, we have you covered.</p>
      </div>
      <div className="container-fluid">
        <p>Where are you?</p>
        <input type="text" placeholder="Enter your delivery address"></input>
      <p className = "text">Pick an interest</p>

      <div className="row" >
        <div className="col-sm-3">
        <div className="card"  >
        <img src="/images/fast-food.svg" class="card-img-top" alt="fastfood"/>
        <div className="card-body">
          <h5 className="card-title">Fast Food</h5>
          <p className="card-text">All sorrow are less with bread</p>
        </div>
      </div>
        </div>
    
        <div className="col-sm-3">
        <div className="card">
        <img  src="/images/Vegetables & Drinks.svg" class="card-img-top" alt="vegetables&fruit"/>
        <div className="card-body">
          <h5 className="card-title">Vegetable & Fruit</h5>
          <p className="card-text">May not want it,but good for you.</p>
        </div>
      </div>
        </div>
      
        <div className="col-sm-3">
        <div className="card">
        <img  src="/images/Drinks & Cocktails.svg" class="card-img-top" alt="Drinks&cocktails"/>
        <div className="card-body">
          <h5 className="card-title">Drinks & Cocktails</h5>
          <p className="card-text">I feel sad for who don't drink.</p>
        </div>
      </div>
        </div>
        
        <div className="col-sm-3">
        <div className="card">
        <img  src="/images/resturant.svg" class="card-img-top" alt="resturant"/>
        <div className="card-body">
          <h5 className="card-title">Resturant</h5>
          <p className="card-text">All sorrows are less with bread.</p>
        </div>
      </div>
        </div>
        </div>

        
   </div> 
{/* first div */}

<div className="container-text">
  <h4>HOW WE SERVE YOU</h4>
  <div className="row">
    <div className="col-sm-4">
    <img  src="/images/Illustration_1.svg" alt="illustration"/>

      <h5>Tell us where you are</h5>
      <p>select the location you want us to deliver</p>
    </div>
    <div className="col-sm-4">
    <img  src="/images/illustration_2.svg" alt="illustration"/>
      <h5>Tell us what you want</h5>
      <p>Browse the type of food that interest you</p>
    </div>
    <div className="col-sm-4">
    <img  src="/images/illustration_3.svg" alt="illustration"/>
      <h5>We'll come running</h5>
      <p>your order will be delivered to you in no time</p>
    </div>
  </div>
  

</div>


<footer className="footer">
<p>Contact us</p>
<div className="row">
<img src="images/twitter 2.svg" alt="twitter" />
<img src="images/youtube 1.svg" alt="youtube" />
<img src="images/facebook-f 1.svg" alt="facebook" />

<div className="col-sm-6">
  <p>Terms & Conditions. privacy policy</p>
</div>
<div className="col-sm-6">
  <p>@Copyright 2021 Foodbag is a registered trademark</p>
</div>

</div>

</footer>







    </div>
  );
}

export default App;
