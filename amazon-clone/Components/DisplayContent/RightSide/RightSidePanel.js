import React, { useEffect, useState } from 'react';
import "./RightSide.css"

import Product from './Product';
import { Link } from 'react-router-dom';
function RightSidePanel(props) {
    const [listOfProduct,setListOfProducts] = useState([]);

    useEffect(()=>{
        //api call
        let list=[
        {id:1233444,name: "Iphone X",rating :"12893",price :"74000",image :"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380989989"},
        {id:432424,name: "Iphone 11", rating :"3243",price :"43200",image :"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380990982"},
        {id:42423425,name: "Iphone 12", rating :"45321",price :"67000",image :"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991526"},
        {id:4214214124312,name: "Iphone 13", rating :"13551",price :"68800",image :"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991772"},
        {id:234242,name: "Iphone 12", rating :"45321",price :"67000",image :"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991526"}
        // {id:21425345,name: "Iphone 13", rating :"13551",price :"68800",image :"https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991772"}

        
        ]
        setListOfProducts(list);
    },[]);
    return (
        <div className="RightSide_main">
            {/* <Product rating="22234" price ="56000" name="Apple Iphone 11(64gb)-storage" image="https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991526"/>
            <Product rating="22234" price ="56000" name="Apple Iphone 11(64gb)-storage" image="https://ik.imagekit.io/Amazon2000/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1688380991526"/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/> */}
            {
                listOfProduct.map( (item)  =>(
                    <Link to={"/order"+item.id}>
                    <Product definition={item}/>
                    </Link>
                ))

            }
        </div>
    );
}

export default RightSidePanel;