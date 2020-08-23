const initialState = {
    items: [],
    isLoading: true
}


const pizzas = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PIZZAS': return {
            ...state, 
            items: action.payload,
            isLoading: false
        }
    }
}

export default pizzas