const ADD_ITEM_TO_REGISTRY = 'ADD_ITEM_TO_REGISTRY';

const initialState = {
    registryItems: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        // case ADD_ITEM_TO_REGISTRY: return state.registryItems.concat([action.item]);
        case ADD_ITEM_TO_REGISTRY: return { registryItems:[...state.registryItems, action.item]};
        default: return state;
    }
    
};