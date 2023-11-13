import React from 'react';
import { useSelector } from 'react-redux';
import Route from 'react-router-dom/Route';
import {NavLink} from 'react-router-dom'


function ProductComponent(props) {
    const products= useSelector(state => state.allProducts.products)
    const renderList= products.map((product) => {
    const {id,title,image,price,category} =product
    return (

        <div className="four wide column" key={id}>
            <NavLink to={`/product/${id}`}>
           <div className="ui link cards">
           <div className="card">
           <div className="image">
               <img src={image} />
           </div>
           <div className="content">
    <div className="header">{title}</div>
    <div className="meta price">${price}</div>
    <div className="meta">{category}</div>
           </div>
        </div>
           </div>
           </NavLink>
        </div>
    );
    })
    return (
        <>{renderList}</>
    )
}

export default ProductComponent;