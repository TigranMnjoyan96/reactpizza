const initialState = {
    items: [2222],
    isLoading: true
}


const pizzas = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PIZZAS': return {
            ...state, 
            items: action.payload,
            isLoading: false
        }
        default: state
    }
}

export default pizzas