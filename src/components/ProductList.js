

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';

function ProductList(props) {
    const dispatch = useDispatch()
    const products = useSelector(state=>state)
    const fetchProducts = async()=> {const res= await axios.get("https://fakestoreapi.com/products")
                                    dispatch(setProducts(res.data))
}
    useEffect(()=>{
        fetchProducts()
    },[])

    console.log(products)
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    );
}

export default ProductList;