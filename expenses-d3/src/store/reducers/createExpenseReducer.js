const initialState={
    expenses:[
        {name :'Coffee',amount:'10',timestamp:''}
    ]
}

const createExpenseReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
           
                return {...state,
                    expenses:[action.payload,...state.expenses]}

        default: return state;
    }


}

export default createExpenseReducer