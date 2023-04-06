const initial_state = {
    products: []
};

const ProductReducer = (state=initial_state, action) => {
    switch(action.type) {
        case 'SET_PRODUCTS': 
        console.log('SEt ')
        return {
            ...state,
            products: action.payload
        }

        case 'REMOVE_PRODUCT': 
        console.log('reducer:', action.payload)
        return {
            ...state,
            products: state.products.filter((prod) => {
                return action.payload !== prod.id
            })
        }

        default:
        return {
            ...state
        }    
    }
};

export default ProductReducer;


