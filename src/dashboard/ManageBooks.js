import React from "react";
import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ManageBook = () => {
  
     const [AllBooks, setAllBooks] = useState([]);
       
     useEffect(() => {
 
         fetch('http://localhost:5000/books')
         .then(res => res.json())
         .then(res => setAllBooks(res.data))
         .catch(err => console.log(err))
    }, [])
    //delete a book
    const handleDelete = (id) =>{
          console.log(id);
          fetch(`http://localhost:5000/books/${id}`,{
              method:"DELETE",
             
          }).then(res => res.json())
          .then(res => {
            alert("book is deleted successfully!")
            setAllBooks(res.data);
          })
    }

return ( 
<div className="px-4 my-12 ">
   <h2 className="mb-8 text-3xl font-bold hover:text-blue-500 transition-all ease-in"> Manage Your Books </h2>
               
   {/*Table book data */}
   
      <Table className="lg:w-[1100px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name </Table.HeadCell>
          <Table.HeadCell>Genres</Table.HeadCell>
          <Table.HeadCell>rating</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manager</span>
          </Table.HeadCell>
        </Table.Head>
        {
          AllBooks.map((book, index) =>  <Table.Body className="divide-y" key={book._id}>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{book.title}</Table.Cell>
            <Table.Cell>{book.author}</Table.Cell>
            <Table.Cell>{book.genres}</Table.Cell>
            <Table.Cell>{book.rating}</Table.Cell>
            <Table.Cell >
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-3">
                Edit
              </Link>
              <button onClick={ () => handleDelete(book._id) } className="bg-red-500 px-4 py-1 font-bold text-white rounded-sm hover:bg-blue-500 transition-all ease-linear">Delete</button>
            </Table.Cell>
          </Table.Row>
               
      </Table.Body> )
        }
       
      </Table>
    
</div> 
    );
}
 
export default ManageBook;