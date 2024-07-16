import React from "react";
import { useAppContext } from "../context/appContext";
import { Card } from "flowbite-react";
const Favourite = () => {
    
    const {favorites ,removeFromFavorites} = useAppContext();

     console.log("favourite" ,favorites);
    
    

    return ( 
        <div className="mt-28 px-4 lg:px-24 ">
        <div className=" p-3 grid gap-8 my-12 lg:grid-cols-3  sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
            {
                 favorites.length > 0 ? favorites.map((book) => (
                       <Card key={book._id}
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
                      <button onClick={() => removeFromFavorites(book.id)} className="bg-blue-700 text-white font-semibold py-2 hover:bg-blue-300 transition-all ease-linear rounded"> Remove from favorites</button>   
                  </Card>
                )
                ): <h1> you Dont have any favourite books yet!</h1>
             }
            
        </div>
        </div>
     );
}
 
export default Favourite;