const initial_state = {
    products: []
};

const ProductReducer = (state=initial_state, action) => {
    switch(action.type) {
        case 'SET_PRODUCTS': 
        return {
            ...state,
            products: action.payload
        }

        case 'REMOVE_PRODUCT': 
        return {
            ...state,
            products: state.products.filter((prod) => {
                return action.payload !== prod.id
            })
        }
    }
};

export default ProductReducer;

