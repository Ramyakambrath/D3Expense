const initialState={
    categories:[
        {name :'test'}
    ]
}

const createCategoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_CATEGORY':
           
                return {...state,
                    categories:[action.payload,...state.categories]}

        default: return state;
    }


}

export default createCategoryReducer