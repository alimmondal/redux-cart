import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions"

const initialState= {
    cart: [],
    products: [
        {name: 'Lenovo Laptop', id: 1},
        {name: 'Afsus Laptop', id: 2},
        {name: 'Dell Laptop', id: 3},
        {name: 'HP Laptop', id: 4},
        {name: 'Toshib Laptop', id: 5},
        {name: 'Toshi Laptop', id: 6},
        {name: 'Tosh Laptop', id: 7},
        {name: 'Tos Laptop', id: 8},
        {name: 'Toshibaah Laptop', id: 9},
        {name: 'Toshiba.... Laptop', id: 10}
    ]
}



const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id, 
                name: action.name, 
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};

            case REMOVE_FROM_CART:
                 const cartId = action.cartId;
                 const remainingCart = state.cart.filter(item => item.cartId !== cartId);
                 return {...state, cart: remainingCart};

        default:
            return state;
    }
}

export default cartReducer;