import React, { Component } from 'react';
import "./MainPage.css";

import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }
  
    render() { 
        return ( 
        <div className="mainpage">
           <div style={{paddingTop:"260px", display: "flex",flexWrap:"wrap",margin:"40px"}}>
            <AdvertisementOne/>
            <AdvertisementFour/>
            <AdvertisementOne/>
            <AdvertisementOne/>
            <AdvertisementOne/>
            <AdvertisementFour/>
            <AdvertisementFour/>
            <AdvertisementOne/>
            </div> 
        </div> );
    }
}
 
export default MainPage;