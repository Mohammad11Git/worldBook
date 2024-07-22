import React from "react";
import { Card } from "flowbite-react";
const Favourite = ({ favorites, deleteFromFavorites }) => {

     //dataFav?.find((favBook) => favBook._id === book._id)
    return ( 
        <div className="mt-28 px-4 lg:px-24 ">
          <h2 className=" p-4 text-5xl font-bold text-center hover:text-blue-700 transition-all ease-in "> Favourites Books</h2>
        <div className=" p-3 grid gap-8 my-12 lg:grid-cols-3  sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
            {
                  favorites.map((book) => (
                       
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
                    
                      <button onClick={() =>  deleteFromFavorites(book)} className="bg-blue-700 text-white font-semibold py-2 hover:bg-blue-300 transition-all ease-linear rounded"> Remove from favorite  </button>
                      
                    </Card>
         
                )
                )
             }
            {
                favorites.length === 0 ? (
                 <h1 className="text-4xl w-fit mx-auto">Noting Here, plz Add</h1>
                  ) : null
            }
            
        </div>
        </div>
     );
}
 
export default Favourite;