import React from 'react';
import Link from 'react-router-dom'
;
class Home extends Component {
    render(){
        return(
            <div>
                <h1>GitHub Battle: Battle your friends...</h1>
                <link className='button' to='/battle'/>
            </div>
        )
    }
}