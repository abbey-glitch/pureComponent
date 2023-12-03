import React, { Component } from 'react';
import Counter from './counter';
import pics1 from '../pics1.jpg';
import lambo from '../lambo.png'
class Counters extends Component {
    state = { counters:[
              {id:1, value:4, src:lambo},
              {id:2, value:0, src:lambo},
              {id:3, value:0, src:lambo}] 
            }    
          
            // handleIncrement = (product) =>{
            //     console.log(product)
            //     this.setState({counters:this.state.counters + 1})
        
            // }
            addImages = (event_id)=>{
                const counter = this.state.counters.map((single)=>
                        single.src = pics1,
                )
                // this.setState({counter})
                // counters = pics1
                this.setState({counter})
                console.log(counter)
            } 
            
            deleteHandle = (event_id) => {
                const counters = this.state.counters.filter(c => c.id != event_id)
                this.setState({counters})
            }
    render() { 
        // console.log('props', this.state.counters)
        return (<>
        {this.state.counters.map(counter =>
        <Counter counter={counter}
        key={counter.id}
        onClick={this.addImages}
        onDelete={this.deleteHandle}>
            <h3>title</h3>
            {/* <img src={lambo} width="15%" alt="" /> */}
        </Counter>
        )}
        </>);
    }
}
 
export default Counters;