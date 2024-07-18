import { useEffect, useState } from "react";
import BookCards from "./BookCard";
const BestSellerBook = () => {

   const [Books, setBooks] = useState([]);
       
   useEffect(() => {

        fetch('http://localhost:5000/books?p=0')
        .then(res => res.json())
        .then(res => setBooks(res.data))
        .catch(err => console.log(err))
 }, [])
            
    return ( 

       <div>
       <BookCards Books={Books}  headLine="Best Seller Books"/> 
       </div>

     );            
}
 
export default BestSellerBook;