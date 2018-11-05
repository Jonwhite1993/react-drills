import React from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';

 function Header(){
    
    return (
        <div className='header'>
            <ReactPlayer className='react-player'url ='https://www.youtube.com/watch?v=LaYxcGVj38k&index=2&list=RDLzi7ljJiLJQ' 
            playing
            
            width='100%'
            height='100%'
             />
            <Link to ='/'><h1>Home</h1></Link>
            <Link to ='/Details'><h1>Details</h1></Link>
            <Link to ='/Signup'><h1>Signup</h1></Link>
        </div> 
    )

}
export default Header;