
import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


const Shop = () => {
  const [Books, setBooks] = useState([]);
  const token = Cookies.get("token") || "";


  useEffect(() => {

    fetch('http://localhost:5000/books')
    .then(res => res.json())
    .then(res => setBooks(res.data))
    .catch(err => console.log(err))
   }, []);

   const addToFavourite = (book) => {
    console.log(token);
   
    axios.post("http://localhost:5000/user/favourite_book/add", book, {
     headers: {
       "Content-Type": "application/json",
       Authorization: `${token}`,
     },
}).then(res =>{
 console.log(res);
   }
).catch(error => {
  console.error("Error loading favoritebooks",error);
});
}
      

    return (  
        <div className="mt-28 px-4 lg:px-24 ">
              <h2 className=" p-4 text-5xl font-bold text-center hover:text-blue-700 transition-all ease-in ">All Books are Here</h2>
         <div className=" p-3 grid gap-8 my-12 lg:grid-cols-3  sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
            {
               Books.map((book) => (
                    <Card
                  >
                    <img src={book.imageURL} alt="" className="h-96 rounded" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>
                        {book.title}
                
                      </p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                         It is "captivating", suggesting the book will be engaging and difficult to put down.
                    </p>              
                  
                    <button onClick={() => addToFavourite(book)} className="bg-blue-700 text-white font-semibold py-2 hover:bg-blue-300 transition-all ease-linear rounded"> Add to favorite  </button>
                    
                  </Card>
                  
                )
                )
            }
         </div>
        </div>
    );
}
 
export default Shop;