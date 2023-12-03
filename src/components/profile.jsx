
import React, { useState } from 'react';
import Greeting from './sample';
const Myprofile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (<>
              <label htmlFor="name">
                name{':'}
                <input type="text" name="" value={name}  onChange={(e)=>setName(e.target.value)} id="" />
              </label>
              <label htmlFor="email">
                email{':'}
                <input type="email" name="" value={email} onChange={e=>setEmail(e.target.value)} id="" />
              </label>
              <Greeting name={name}/>
            </>
    );
}
 
export default Myprofile;