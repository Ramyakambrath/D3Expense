export const addCategory=(category) =>{
   return{
        type:'ADD_CATEGORY',
        payload: category

    }
       
    
}

export const addExpense=(expense) =>{
    return{
         type:'ADD_EXPENSE',
         payload: expense
 
     }
        
     
 }