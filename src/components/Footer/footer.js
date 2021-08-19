import React from 'react';
import './Footer.css';
import twitter from '../../images/twitter 2.svg';
import youtube from '../../Images/youtube 1.svg';
import facebook from '../../images/facebook-f 1.svg';

const footer= ()=> {


return (
  <div>
   <footer>
               <div>
                Contact us
                <div className='sm-block'>
                    <img className="sm-icon" src={twitter} alt="twitter" />
                    <img className="sm-icon" src={youtube} alt="youtube" />
                    <img className="sm-icon" src={facebook} alt="facebook" />
                       {/*  
                    <i className='fa fa-twitter sm-icon' />
                    <i className='fa fa-youtube-play sm-icon' />
                    <i className='fa fa-facebook sm-icon' />*/}
                </div>
            </div>
            <div className='copyright'>
                <span>Terms &amp; Conditions. Privacy Policy</span>
                <span>&copy; Copyright 2021 FoodBag is a registered trademark</span>
            </div>
        </footer>
   
  </div>
);

}
export default footer;
