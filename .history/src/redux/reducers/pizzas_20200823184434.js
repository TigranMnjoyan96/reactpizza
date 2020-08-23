const initialState = {
    items: [],
    isLoading: false
}


const pizzas = (state = initialState, action) {
    switch(action.type) {
        case 'SET_PIZZAS': return {
            ...state, 
            items: action.payload
        }
    }
}

export default pizzas