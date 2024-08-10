import React from "react";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Spinner } from "flowbite-react";

const Favourite = () => {
  const token = Cookies.get("token") || "";
  const [favourite, setFavourite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getFavourite = async () => {
    try {
      const res = await axios("http://localhost:5000/user/favourite_book", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      setFavourite(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFavourite();
  }, []);

  const removeFromFavorites = (book) => {
    console.log(token);
    axios.delete(`http://localhost:5000/user/favourite_book/remove/${book._id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Error loading favoritebooks", error);
      });
  };

  return (
    <div className="mt-28 px-4 lg:px-24 ">
      <h2 className=" p-1 text-5xl font-bold text-center hover:text-blue-700 transition-all ease-in ">
        Favourites Books
      </h2>
      <div className=" p-1 grid gap-8 my-12 lg:grid-cols-3  sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {favourite?.map((book) => (
          <Card>
            <img src={book.imageURL} alt="" className="h-96 rounded" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.title}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              It is "captivating", suggesting the book will be engaging and
              difficult to put down.
            </p>
            <button
              onClick={() => removeFromFavorites(book)}
              className="bg-blue-700 text-white font-semibold py-2 hover:bg-blue-300 transition-all ease-linear rounded"
            >
              Remove from favorite
            </button>
          </Card>
        ))}
      
      </div>
      {
         isLoading && <div className=" flex justify-center p-10"> <Spinner color="info" aria-label="Info spinner example" /> </div>
      }
    </div>
  );
};

export default Favourite;
