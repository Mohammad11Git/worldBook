import React from "react";
import { FaSearch ,FaStarHalf  } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { Card } from "flowbite-react";
import {Link} from 'react-router-dom';
import { Spinner } from "flowbite-react";
const Search = () => {

  const[guery,setQuery] = useState("");
  const[books,setBooks] = useState([]);
  const [Alert,setAlert] = useState("");
  const [loading,setLoading] = useState(true);
  const [Found,setfound] = useState(true);


  const getData = async () => {
    if(guery !== ""){
      setfound(false);
      const result = await axios.get(`http://localhost:5000/books/search/${guery}`);
      setLoading(false);
      setBooks(result.data);
      console.log(result);
      setAlert("");
      setQuery("");
    }
   else{
    setAlert("Please fill the form");
   }
  }

  const onChange = (e) => {

    setQuery(e.target.value);
  }

  const onSubmit = (e) => {
        e.preventDefault();
        getData();
  }

    console.log(books);
    return ( 
        <div className="mt-28 px-4 lg:px-24">
            <h2 className=" p-2 text-5xl font-bold text-center hover:text-blue-700 transition-all ease-in ">Search Books</h2>
            <form className="flex flex-col justify-center items-center mt-10 gap-1" onSubmit={ onSubmit}>
             { Alert !== "" && <div className="bg-red-700 px-10 py-2 rounded flex justify-start">
                <h3 className=" text-white">
                   {Alert}
                </h3>
              </div>
              }
              <div className="flex gap-1">
               <input type="text" name="search" id="search" className="py-3 px-10 rounded outline-none" placeholder="search a book" autoComplete="off" onChange={onChange} value = {guery} />
               <button type="submit" className="bg-blue-700 px-6 py-4 text-white font-medium rounded hover:bg-black transition-all ease-in duration-200 "><FaSearch className="text-white h-4 w-4" /></button>
              </div>
            </form>
            { loading === true && <div className=" flex justify-center p-20">  <Spinner color="info" aria-label="Info spinner example"/> </div> }
            <div className=" p-3 grid gap-8 my-12 lg:grid-cols-3  sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
                 {
                  Array.isArray(books) && books.map((book) => (
                    
                    <Card
                    >
                      <Link to = {`/book/${book._id}`}>
                      <img src={book.imageURL} alt="" className="h-96 w-96 rounded" />
                      <h5 className="text-2xl pt-1 font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>
                          {book.title}
                        </p>
                      </h5>
                      <div className='flex justify-between'>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                         {book.author}
                      </p>                          
                      <p className="text-black font-bold"> <FaStarHalf className='text-yellow-200 w-6 h-6' />
                        {book.rating}
                      </p>       
                      </div>   
                      </Link> 
                    </Card>

                  ))
                 }
                 
            </div>
            {
                  books.length === 0 && Found === false && <div className=" flex justify-center mt-20 font-bold text-4xl text-center"> Not Found </div>
             }
           
        </div>
     );
}
 
export default Search;