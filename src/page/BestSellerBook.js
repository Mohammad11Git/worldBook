import { useEffect, useState } from "react";
import BookCards from "./BookCard";
import { Spinner } from "flowbite-react";
const BestSellerBook = () => {

   const [Books, setBooks] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {

      fetch('http://localhost:5000/books?p=0')
         .then(res => res.json())
         .then(res => {
            setLoading(false)
            setBooks(res.data)
         })
         .catch(err => console.log(err))
   }, [])

   return (

      <div>
         <BookCards Books={Books} headLine="Best Seller Books" />
         {loading && <div className=" flex justify-center p-10"> <Spinner color="info" aria-label="Info spinner example" /> </div>}
      </div>

   );
}

export default BestSellerBook;