import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const SingleBook = () => {
   const {_id} = useParams();
   const { Books:book } = useFetch(`http://localhost:5000/books/` + _id);
    return ( 
        <div className="mt-28 px-4 lg:px-24"> 
             <img src={book.imageURL} alt="" className="h-96" />
             <h2>{book.title}</h2>
        </div>
     );
}
 
export default SingleBook;