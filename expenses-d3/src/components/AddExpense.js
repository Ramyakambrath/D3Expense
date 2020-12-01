import React,{ Component} from 'react'
import { connect} from 'react-redux';
import { addExpense} from '../store/actions/viewactionCreaters'

class AddExpense extends Component{
  
     date= new Date()

    state={
        name:'',
        amount:'',
        'day':this.date.getDate(),
        'month':this.date.getMonth() + 1,
        'year':this.date.getFullYear(),
        editing: false
    }

    onChange=(e)=>{
      
        this.setState({
            [e.target.id]:e.target.value
        })

       
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
       
        let timestamp= new Date(this.state.year,this.state.month -1, this.state.day);
        console.log(this.state)
        if(this.state.name && this.state.amount && timestamp){

            const newExpense={
              name:this.state.name,
              amount:Number(this.state.amount),
              timestamp:timestamp
            }
 
            this.props.addExpense(newExpense)
            this.setState({
                name:'',
                'amount':'',
                'timestamp':''
            })
        }
    
      
      }

render(){
   

  

    return (
      <div className="AddExpense">
              <div className="AddExpense-Header">
                  <h4> Add Expense</h4>
              </div>
     <div className="AddCategory-body">
        <input className="input-sm form-control width100" id='name' type='text' placeholder='name' value={this.state.name} onChange={this.onChange}/>
        <input className="input-sm form-control width100" id='amount'type='text' placeholder='amount' value={this.state.amount}  onChange={this.onChange}/>
        <input className="input-sm form-control width30" id='month' type='text' placeholder='month' value={this.state.month} onChange={this.onChange}/>
        <input className="input-sm form-control width30" id='day' type='text' placeholder='day' value={this.state.day}  onChange={this.onChange}/>
        <input className="input-sm form-control width30" id='year' type='text' placeholder='year' value={this.state.year}  onChange={this.onChange}/>
        <button className="btn btn-sm btn-success width100" onClick={this.onSubmit}>Add</button>
    </div> 

      </div>

    )
}



}

const mapStateToProps=(state)=>{ 
   
    return {
    expense:state.expense.expenses.name
}
}

export default connect(mapStateToProps,{addExpense})(AddExpense)