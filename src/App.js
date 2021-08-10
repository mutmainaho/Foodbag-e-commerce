
import './App.css';


function App() {
  return (
    <div>
      <div className="container">
      <nav class="nav-bar">
      <p>FoodBag</p>
      <ul className="bar">
        <li>Carts</li>
        <li>Login</li>
        <li><button type="button" className="btn btn-default btn-outline-danger">sign up</button></li>
      </ul>
    </nav>
      </div>
      <div className="container">
        <h2>Cart</h2>
      <div className="row">
      
        <div className="col-sm-3">
        <div className="card " >
          <img src="/images/image4.svg" class="card-img-top" alt="fastfood"/>
        </div>
        <div className="top col-sm-6">
        <p>kfc</p>
        <img src="/images/plus.svg" alt="plus"/>
        <p>2</p>
        <img src="/images/Minus.svg" alt="minus"/>
       <p>10,000</p>
       </div>
        </div>
        </div>

        <div className="col-sm-3">
        <div className="card " >
          <img src="/images/image3.svg" class="card-img-top" alt="fastfood"/>
        </div>
        </div>
        <div className="col-sm-3">
        <div className="card " >
          <img src="/images/image1.svg" class="card-img-top" alt="fastfood"/>
        </div>
        </div>
        <div className="col-sm-3">
        <div className="card " >
          <img src="/images/scooter 1.svg" class="card-img-top" alt="delivery sevice"/>
        </div>
        </div>
        </div>

    

  

    </div>
  );
}

export default App;
