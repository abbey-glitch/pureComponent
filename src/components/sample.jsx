import React, { PureComponent } from 'react';
class Greeting extends PureComponent {
    // state = {  } 
    render() { 
        console.log("Greeting was rendered at", new Date().toLocaleTimeString());
        return <h3>Hello{this.props.name && ', '}{this.props.name}!</h3>;
    }
}
 
export default Greeting;
