import react from 'React';
import './intro.css';


const intro = () => {
    return(
        <div>
        <div className="container">
        <h1>FOODBAG</h1>
        <p>Anything food, we have you covered.</p>
        <div className="container-2">
            <h3>Where are you?</h3>
            <div className="form-group">
               <select class="form-control" id="sel1" placeholder="Enter your delivery address">
                  <option>Enter your delivery address</option>
                     <option>Bodija Market</option>
  
         </select>
       </div>
        </div>
      </div>




        </div>
    )

}
export default intro;