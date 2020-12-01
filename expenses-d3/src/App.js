import React from 'react';
import AddCategory from './components/AddCategory'
import AddExpense from './components/AddExpense'
import './App.css';
import store from './store/store'
import { Provider} from 'react-redux'

function App() {
  return (
     <Provider store ={store}>
    <div className="App">
    <AddCategory/>
    <AddExpense/>
    </div>
    </Provider>
  );
}

export default App;
