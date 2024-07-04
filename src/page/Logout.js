import React from 'react';
import { Link } from 'react-router-dom' ;

   const Logout = () => {

        
   
    return ( 
        <div className="h-screen bg-teal-100 flex items-center justify-center">
            <Link to='/'>
            <h2 className='bg-blue-400 px-8 py-2 rounded text-white '>Logout</h2> 
            </Link> 
        </div>
     )
}
 
export default Logout;