import React,{Component} from 'react'
import { addCategory} from '../store/actions/viewactionCreaters'
import { connect} from 'react-redux';

class AddCategory extends Component{

    state={
        name:''
    }

    onChange=(e)=>{
        this.setState({
            name:e.target.value
        })
        
    }
    onSubmit=(e)=>{
      e.preventDefault();
     

      const newCategory={
          name: this.state.name
      }
      console.log(newCategory)
      this.props.addCategory(newCategory)

    }
    
    render(){
      

        return (
            <div className="AddCategory">
              <div className="AddCategory-Header">
                  <h4> Add Category</h4>
              </div>
              <div className="AddCategory-body">

              <input type="text" className="input-sm form-control width100" placeholder='name' value={this.state.name} onChange={this.onChange}/>
              <button className="btn btn-sm btn-success width100" onClick={this.onSubmit}>Add</button>
              </div>

            </div>
        )}
}

const mapStateToProps=(state)=>{ 
   
    return {
    category:state.category.categories.name
}
}

export default connect(mapStateToProps,{addCategory})(AddCategory)