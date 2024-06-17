import React from 'react';
const Logout = () => {
    const handlelogout = () =>{

    }
    return ( 
        <div className="h-screen bg-teal-100 flex items-center justify-center">
            <button className='bg-blue-400 px-8 py-2 rounded text-white ' onClick={handlelogout}>Logout</button>
            
        </div>
     );
}
 
export default Logout;