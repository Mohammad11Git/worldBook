import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { Card } from "flowbite-react";

const SingleBook = () => {
   const {_id} = useParams();
   const { Books:book } = useFetch(`http://localhost:5000/books/` + _id);
    return ( 
        <div className="mt-28 px-4 lg:px-24 p-10"> 
          <Card>
             <div className="flex items-center justify-center">
              <img src={book.imageURL} alt="" className="h-96 w-96 rounded" />
             </div>
             <h2 className=" font-bold ">{book.title}</h2>
             <p className="font-thin" > {book.author}</p>
             <p className="font-normal text-gray-700 dark:text-gray-400">{book.description}</p>
             <p>{book.genres}</p>
          </Card>
        </div>
     );
}
 
export default SingleBook;