import react from 'React';
import './service.css';
import illustrator1 from '../../Images/Illustration_1.svg';
import illustrator2 from '../../Images/illustration_2.svg';
import illustrator3 from '../../Images/illustration_3.svg';



const service = () => {
    return (
        <div>
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
    )
}
export default service;




