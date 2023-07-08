import React, { Component } from 'react';
import "./NavBar.css" ;
import { CartContext } from '../CartContext';
class NavBar extends Component {
    static contextType=CartContext;
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    render() { 
        let {item,size,increment} = this.context;
        return ( 
        <div>
        <div className="navbar__component">

            <div className="navbar__logo"></div>

            <div className="navbar__locator">
            <div className="navbar__locatorimage"></div>
            <div className="navbar__location">Bangalore</div>
            </div> 
            
            <div className='navbar__searchcomponent'>
                <div>
                    <select className='navbar__dropdown'>
                        <option value="All">All</option>
                        <option value="Alexa">Alexa</option>
                        <option value="Books">Books</option>
                        <option value="Baby">Baby</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Clothes">Clothes</option>
                       
                    </select>
                </div>
                <div>
                    <input type="text" className="navbar__searchbox"/>
                </div>
                <div className='navbar__seachboxdev'>
                    <div className="navbar__searchicon"/>
                </div>
            </div>
            <div className= 'navbar_text navbar__signin'>
                <div style={{fontSize:"14px"}}>Hello,Sign in</div>
                <div style={{fontWeight:"bold"}}>Accounts&Lists</div>
                </div>
            <div className='navbar_text navbar__returns'>
                <div style={{fontSize:"14px"}}>Returns</div>
                <div style={{fontWeight:"bold"}}>&Orders</div>
                </div>
            <div className='navbar_text navbar__Cart'>
              <div src="" className="cart_image"></div>
              <div className="cart_item">{size}</div>
           <div className='navbar_text_cart'>Cart</div>
            </div>


       
        
        </div> 
        <div className='navbar__footer'>
        <div className='navbar__footer_text'>Best Seller</div>
        <div className='navbar__footer_text'>Mobile</div>
        <div className='navbar__footer_text'>Amazon Pay</div>
        <div className='navbar__footer_text'>Fashion</div>
        <div className='navbar__footer_text'>Electronics</div>
        <div className='navbar__footer_text'>Prime</div>
        <div className='navbar__footer_text'>New Release</div>
        <div className='navbar__footer_text'>Customer Service</div>
        <div className='navbar__footer_text'>Computers</div>
        <div className='navbar__footer_text'>Home Applications</div>
        </div>
        </div>
       
       );
    }
}
 
export default NavBar;