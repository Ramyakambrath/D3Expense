import { combineReducers} from 'redux';
import createCategoryReducer from './createCategoryReducer';
import createExpenseReducer from './createExpenseReducer';

export default combineReducers({
    category:createCategoryReducer,
    expense:createExpenseReducer
})