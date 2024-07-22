
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";
import Shop from '../page/Shop';
import Favourite from '../page/favourite';


const AppContextProvider = () => {
    
  const [Books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const token = Cookies.get("token") || "";

  useEffect(() => {

    fetch('http://localhost:5000/books')
    .then(res => res.json())
    .then(res => setBooks(res.data))
    .catch(err => console.log(err))
    LoadFavorites();
   }, []);

    const LoadFavorites = () => {
        axios.get('http://localhost:5000/user/favourite_book', {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }).then(
             res =>{
                setFavorites(res.data);
             }
          ).catch(error => {
            console.error("Error loading favoritebooks",error);
          });
        }
    

    const addToFavourite = (book) => {
   
             axios.post("http://localhost:5000/user/favourite_book/add", book, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
        }).then(
            res =>{
                LoadFavorites();
            }
         ).catch(error => {
           console.error("Error loading favoritebooks",error);
         });
        }
        const removeFromFavorites = (book) =>{
            axios.delete(`http://localhost:5000/user/favourite_book/remove/${book._id}`, {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }).then(
                res =>{
                    LoadFavorites();
                }
             ).catch(error => {
               console.error("Error loading favoritebooks",error);
             });
        }
     

    

    return (
        <div>       
           <Shop Books={Books} addToFavorites={addToFavourite} />

           < Favourite favorites={favorites} deleteFromFavorites={removeFromFavorites} />
        </div>
               
        
    );
     
};


export default AppContextProvider;