
import React from 'react'
import '.vendor.css'

function App() {
    return (
      <div>
        <div className="container">
        
        </div>
        <div className="container">
        <h3 className="text">All Vendors</h3>
        <div className="top">
        <img className="image" src="/images/KFC logo.svg" alt="logo" />
        <p className="col-sm-10">KFC</p>
        <p ><a href=" #">view all</a></p>
        </div>
        <div className="row" >
          <div className="col-sm-3">
          <div className="card " >
          <img src="/images/image4.svg" class="card-img-top" alt="fastfood"/>
        </div>
        <div className="price">
        <p>
          KFC-King bucket
        </p>
        <p className="price-2">
        #5,000
        </p>
        </div>
        
        <button type="submit" className="btn btn-default btn-outline-danger">Add to cart</button>
          </div>
  
          <div className="col-sm-3">
          <div className="card " >
          <img src="/images/image4.svg" class="card-img-top" alt="fastfood"/>
        </div>
        <div className="price">
        <p>
          Zinger burger
        </p>
        <p className="price-2">
        #3,600
        </p>
        </div>
     <button type="submit" className="btn btn-default btn-outline-danger">Add to cart</button>
          </div>
  
          <div className="col-sm-3">
          <div className="card " >
          <img src="/images/image4.svg" class="card-img-top" alt="fastfood"/>
        </div>
  
        <div className="price">
          <p>Chicken strips</p>
          <p className="price-2">#1,450</p>
        </div>
        <button type="submit" className="btn btn-default btn-outline-danger">Add to cart</button>
          </div>
          
  
          <div className="col-sm-3">
          <div className="card " >
          <img src="/images/image4.svg" class="card-img-top" alt="fastfood"/>
        </div>
        <div className="price">
          <p>Yamilicious</p>
          <p className="price-2">#900</p>
        </div>
        <button type="submit" className="btn btn-default btn-outline-danger">Add to cart</button>
          </div>
          </div>
          </div>
      
          
        
         
  
          
     
  {/* first div */}
         <div className="container container-chi">
           <div className="top">
        <img className="image" src="/images/Chicken republic_logo.svg" alt="logo" />
        <p className="col-sm-10">CHICKEN REPUBLIC</p>
        <p ><a href=" #">view all</a></p>
        </div>
         <div className="row" >
           <div className="col-sm-3">
           <div className="card " >
           <img src="/images/image1.svg" class="card-img-top" alt="fastfood"/>
         </div>
         <div className="price">
          <p>Refuel Max</p>
          <p className="price-2">#1,200</p>
        </div>
         <button type="submit" className="btn btn-default btn-outline-danger">Add to cart</button>
           </div>
   
           <div className="col-sm-3">
           <div className="card " >
           <img src="/images/image2.svg" class="card-img-top" alt="fastfood"/>
         </div>
         <div className="price">
          <p>Express Meal</p>
          <p className="price-2">#2,000</p>
        </div>
         <button type="submit" className="btn btn-default btn-outline-danger">Add to cart</button>
           </div>
   
           <div className="col-sm-3">
           <div className="card " >
           <img src="/images/image3.svg" class="card-img-top" alt="fastfood"/>
         </div>
         <div className="price">
          <p>citizen meal</p>
          <p className="price-2">#1,500</p>
        </div>
         <button type="submit" className="btn btn-default btn-outline-danger">Add to cart</button>
           </div>
   
           <div className="col-sm-3">
           <div className="card " >
           <img src="/images/image3.svg" class="card-img-top" alt="fastfood"/>
         </div>
  
         <div className="price">
          <p >chruncy wings</p>
          <p className="price-2">#1,750</p>
        </div>
         <button type="submit" className="btn btn-default btn-outline-danger">Add to cart</button>
           </div>
           </div>
           </div>
  
      </div>
    );
  }
  
  export default vendor;
  