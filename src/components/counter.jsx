import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        counters:this.props.counter.value
     }
    //  constructor(props){
    //     super(props)
    //     console.log(this)
    //  }
     componentDidUpdate(prevProps, prevState){
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
    }
    componentWillUnmount(){
        console.log("component has unmount")
    }
    // handleIncrement(product){
    //     //  console.log(this)
    //     this.setState({counters:this.state.counters + 1})
    // }
    handleIncrement = (product) =>{
        // console.log(product)
        this.setState({counters:this.state.counters + 1})
    }
  
    render() { 
        console.log('propschide', this.props.counter.src)
        return (<>
                  {this.props.children}
                  <div className='my-2'>
                       <span className={this.getColor()} >{this.getNum()}</span>
                       <img src={this.props.counter.src} width="20%" alt="" />
                       <button 
                        onClick={this.handleIncrement}
                        className='btn btn-primary btn-sm mx-2'>
                        INCREMENT
                       </button>
                       <button onClick={()=>this.props.onClick(this.props.counter)}>Add Image</button>
                       <button onClick={() =>this.props.onDelete(this.props.counter.id)} 
                       className='bg-warning'>DECREMENT</button>
                  </div>
        </>);
    }
    getColor = () =>{
        let classes = 'text-light m-2 bg-'
        classes += this.state.counters===0 ? 'danger' : 'success';
        return classes;
    }
    getNum = () =>{
        const {counters} = this.state
        return counters === 0 ? "zero" : counters;
    }
}
 
export default Counter;