import { useState ,useEffect } from "react";

const useFetch = ( url) => {

       const [Books, setBooks] = useState([]);
    useEffect(() =>{
        
        const abortCont = new AbortController();
        //console.log('use effect ran');
        //console.log(city);
  
        fetch(url , { signal: abortCont.signal })
        .then(res => {
             if(!res.ok){
                throw Error('Error the bag');
             }
            return res.json();
        })
        .then( data => {
            setBooks(data);
        })
        .catch( err =>{
      
              console.log('fetch aborted')
        })
      return () => abortCont.abort();
    },[url]);


return { Books };


}
 
export default useFetch;