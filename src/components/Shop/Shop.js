import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props)
    
    const {products, addToCart} = props;
    return (
        <div className="App">
            <h1>this is shop</h1>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)',justifyContent:'center',alignItems: 'center', gridGap:'20px'}}>
            {
                products.map(product => <Product product={product}
                key = {product.id}
                addToCart={addToCart}
                ></Product>)
            }
            </div>
            
        </div>
    );
};


const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps ={
    addToCart: addToCart
}


export default connect(mapStateToProps, mapDispatchToProps)(Shop);