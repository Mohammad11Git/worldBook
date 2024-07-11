import React, { useState } from "react";
import {  Button, Label, TextInput,Select,Textarea } from "flowbite-react";
import axios from "axios";

const UpLoardBook = () => {
     
    const bookCategories = [
        "fiction",
        "historical",
        "fantasy",
        "literary fiction",
        "mental health",
        "historical fiction",
        "adult",
        "science fiction",
        "novels",
        "romantic",
        "mystery",
        "Memoir",
        "Business",
        "Children Books",
        "Travel",
        "Horror",
        "Religion",
        "Non-Fiction"
    ]
    
     const [selectedBookCategory,setselectedBookCategory] = useState(bookCategories[0]);
     
     const handleChangeSelectedValue = (event) => {
        //console.log(event.target.value);
       setselectedBookCategory(event.target.value);
     }
     //handle book submission
     const handleBookSubmit =async (event) => {
            event.preventDefault();
            const form = event.target;
            const title = form.title.value;
            const author = form.author.value;
            const imageURL = form.imageURL.value;
            const genres = form.genreName.value;
            const description = form.description.value;
            const bookPdfURL = form.bookPdfURL.value;
            const rating =1;
           const BookObj = {
              title,author,imageURL,genres,description,bookPdfURL,rating
           }
           try {
            const res = await axios.post("http://localhost:5000/books", BookObj);
            console.log(res);
            alert("Book uploaded successfully!!!");
            form.reset();
           }
           catch(err) {
            console.log(err);
           }
     }
           
           
    return ( 
 <div className="px-4 my-12">
    <h2 className="mb-8 text-3xl font-bold hover:text-blue-500 transition-all ease-in"> UpLoad A book  </h2>
     <form onSubmit={handleBookSubmit} className="flex lg:w-[1100px] flex-col flex-wrap gap-4">
      <div className="flex gap-8">
        <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="title" value="Book Title" />
        </div>
        <TextInput id="title" type="text" name="title" placeholder="Book name" required />
        </div>
        <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="author" value="author Name" />
        </div>
        <TextInput id="author" type="text" name="author" placeholder="author Name" required />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book image URL" />
        </div>
        <TextInput id="imageURL" type="text" name="imageURL" placeholder="Book image URL" required />
        </div>
        <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
          <Select name="genreName" id="inputState" className="w-full rounded" value={selectedBookCategory}
          onChange = {handleChangeSelectedValue } >
              {
                bookCategories.map((option) => <option key={option} value={option}> {option} </option> )
              }
          </Select>
        </div>
      </div>
       <div>
         <div className="mb-2 block">
          <Label htmlFor="description" value="Book Description" />
         </div>
         <Textarea className="w-full" id="description" name="description"  placeholder="Write Your book description..." required rows={6} />
       </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPdfURL" type="text" name="bookPdfURL" placeholder="Book PDF URL" required />
      </div>
        <Button type="submit" className="mt-5">Upload Book</Button>
     
    </form>
</div>
     );
}
 
export default UpLoardBook;