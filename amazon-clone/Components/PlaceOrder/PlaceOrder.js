import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import "./PlaceOrder.css"
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import { Link, useParams } from 'react-router-dom';
import Product from '../DisplayContent/RightSide/Product';
import { CartContext } from '../CartContext';

function PlaceOrder(props) {
    const {item,size,increment} = useContext(CartContext);
    const [productDetails, setProductDetails] = useState([]);
    let{id} = useParams ();

    const addTOCart = function() {
        increment(productDetails);
    }

    useEffect(()=>{
        // fakeapi 
        let list=[
            {
                "id":1233444,
                "name":"IphoneX",
                "rating":"34565",
                "review":"1000",
                "EMI":"2401",
                "delivery":"Wednesday,Aug 18",
                "price":"50999",
                "status":"In stock",
                "soldby":"Darshita Electronics",
                "image":"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380989989",
                "about":["6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                "Face ID for secure authentication"]
                }, {
                    "id":432424,
                    "name":"Iphone11",
                    "rating":"34565",
                    "review":"1000",
                    "EMI":"2401",
                    "delivery":"Wednesday,Aug 18",
                    "price":"50999",
                    "status":"In stock",
                    "soldby":"Darshita Electronics",
                    "image":"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380990982",
                    "about":["Desription for iphone 11 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication"]
                    }, {
                        "id":42423425,
                        "name":"Iphone12",
                        "rating":"34565",
                        "review":"1000",
                        "EMI":"2401",
                        "delivery":"Wednesday,Aug 18",
                        "price":"50999",
                        "status":"In stock",
                        "soldby":"Darshita Electronics",
                        "image":"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991526",
                        "about":["Desription for iphone 12 pro pmax -bla bla",
                        "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                        "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                        "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                        "Face ID for secure authentication"]
                        },
                        {
                            "id":4214214124312,
                            "name":"Iphone13",
                            "rating":"34565",
                            "review":"1000",
                            "EMI":"2401",
                            "delivery":"Wednesday,Aug 18",
                            "price":"50999",
                            "status":"In stock",
                            "soldby":"Darshita Electronics",
                            "image":"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991772",
                            "about":[ "Desription for iphone 13 -bla mini bla",
                            "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                            "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                            "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                            "Face ID for secure authentication"]
                            },
                            {
                                "id":234242,
                                "name":"Iphone12",
                                "rating":"34565",
                                "review":"1000",
                                "EMI":"2401",
                                "delivery":"Wednesday,Aug 18",
                                "price":"50999",
                                "status":"In stock",
                                "soldby":"Darshita Electronics",
                                "image":"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991526",
                                "about":["Desription for iphone 12 pro pmax -bla bla",
                                "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                                "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                                "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                                "Face ID for secure authentication"]
                                },
        // {id:1233444,name: "Iphone X",rating :"12893",price :"74000",image :"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380989989"},
        // {id:432424,name: "Iphone 11", rating :"3243",price :"43200",image :"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380990982"},
        // {id:42423425,name: "Iphone 12", rating :"45321",price :"67000",image :"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991526"},
        // {id:4214214124312,name: "Iphone 13", rating :"13551",price :"68800",image :"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991772"},
        // {id:234242,name: "Iphone 12", rating :"45321",price :"67000",image :"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991526"},
        // {id:21425345,name: "Iphone 13", rating :"13551",price :"68800",image :"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991772"}

        ]
        let itemfilter = list.filter ( item => {
            if(item.id== id) return item;
        })

        console.log(itemfilter); 
        setProductDetails(itemfilter[0]);
    },[]);



    
    return (
        <div>
        <Grid container>
           <Grid item xs={5}>
               <img className="placeorder__image" src={productDetails.image} />
           </Grid>
           <Grid item xs={4}>
               <div className="placeholder__description">
                   <div style={{fontSize:"24px", lineHeight:"32px", fontWeight: 500}}> {productDetails.name} </div>
                   <div>
                       <Rating name="read-only" value="3" readOnly  style={{ fontSize: "20px"}}/>
                       {productDetails.ratings} ratings |
                       {productDetails.review}+ answered questions
                   </div>
                   <hr></hr>
                   <div>
                       <div className="textgap">Price:	<span className="pricetag">₹ {productDetails.price}</span></div>
                       <div className="textgap">FREE delivery: <strong>{productDetails.delivery}</strong></div>
                       <div className="textgap">EMI starts at ₹ {productDetails.emi}. No Cost EMI available</div>
                       <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">{productDetails.status}</div>
                       <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>
                   </div>
                   <div>
                       <br></br>
                       <div style={{fontSize:"24px" }} className="textgap">About this item</div>
                       <div>
                           <ul>
                           {   
                               productDetails.about!=undefined ?
                               productDetails.about.map ( (item) =>(
                                   <li>{item}</li>
                               )) : <span></span>
                           }
                           </ul>
                           {/* <ul> */}
                           {/* <li>6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
                           <li>Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
                           <li>Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
                           <li>12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo</li>
                           <li>Face ID for secure authentication</li>
                           <li>A13 Bionic chip with third-generation Neural Engine</li>
                           <li>Fast-charge capable</li>
                           </ul> */}
                       </div>
                   </div>
               </div>
           </Grid>
           <Grid item xs={3}>
               <Paper variant="outlined" className="placeorder__order">
                   <div>
                       <div><strong>Without Exchange</strong></div>
                       <div>50,999</div>
                       <div style={{ marginTop: "10px"}}><strong>Add an Accessory</strong></div>
                       <div>
                           <label><input type="checkbox" ></input>Apple Airpods</label><br></br>
                           <label><input type="checkbox" ></input>Apple 20W USB Power Adapter</label>
                       </div>
                       <div > 
                       
                           <button className="placeorder__button addtocart" onClick={addTOCart}>Add to Cart</button>
                           <Link to="/checkout">
                           
                               <button className="placeorder__button buynow">Buy Now</button>
                           </Link>
                       </div>
                   </div>
               </Paper>
           </Grid>
        </Grid>
       
   </div>
);
}

export default PlaceOrder;