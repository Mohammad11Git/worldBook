
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import {Link} from 'react-router-dom';
import { FaHeartCircleCheck ,FaStarHalf  } from "react-icons/fa6";

const BookCards = ({headLine ,Books}) => {
      

     
    return ( 
    <div className="my-16 px-7  lg:px-24">
           <h2 className="text-4xl text-center font-bold my-4 p-2  text-black transition-all ease-in duration-200 hover:text-blue-700" >{headLine}</h2>
           {/*cards */}
        <div className="">
            <Swiper
             slidesPerView={1}
             spaceBetween={10}
             pagination={{
               clickable: true,
             }}
            breakpoints={{
             640: {
               slidesPerView: 2,
               spaceBetween: 10,
              },
             768: {
               slidesPerView: 3,
               spaceBetween: 20,
             },
             1024: {
              slidesPerView: 4,
               spaceBetween: 40,
             },
           }}
            modules={[Pagination]}
             className="mySwiper h-full w-full "
          >
          {  Array.isArray(Books) && Books.map((book) => (
                <SwiperSlide key={book._id} className="">
                <Link to = {`/book/${book._id}`}>
                    <div className="relative flex justify-center items-center bg-violet-50 w-50 h-50 rounded  m-1">
                         <img src={book.imageURL} alt="" className="h-72 w-60 p-4 " />
                         <div className=" absolute top-0 right-3  bg-blue-600 hover:bg-black p-2 m-2 rounded">
                          <FaHeartCircleCheck className=" w-4 h-4 text-white "/>
                         </div>
                    </div>
                    <div className="flex justify-between">
                       <div>
                          <h3 className="text-black font-semibold">{book.title}</h3>
                          <p className="text-gray-900">{book.author}</p>
                      </div>
                      <div className='flex'>
                           <p className="text-black font-bold"> <FaStarHalf className='text-yellow-200 w-6 h-6' />  {book.rating} </p>
                           
                      </div>
                    </div>
                </Link>
            </SwiperSlide>))          
          }
        </Swiper>
      </div>
 </div>
     
     );   
}
 
export default BookCards;