import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from "flowbite-react";
import { Rating } from "flowbite-react";
import propic from "../assets/profile.png";
import team1 from "../assets/team-1.webp";
import team2 from "../assets/team-2.webp";
import team3 from "../assets/team-3.webp";
import team5 from "../assets/team-5.webp";
import team6 from "../assets/team-6.webp";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
    return ( 
        <div className=" my-10  px-4 lg:px-24">
            <h2 className="text-4xl font-bold text-center leading-snug mb-10 hover:text-blue-700 transition-all ease-in">Our Customers</h2>
        <div>
            <Swiper
               slidesPerView={1}
               spaceBetween={30}
               pagination={{
                   clickable: true,
                }}
                breakpoints={{
                640: {
                 slidesPerView: 1,
                 spaceBetween: 20,
              },
              768: {
                 slidesPerView: 2,
                 spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
             },
        }}
        modules={[Pagination]}
        className="mySwiper mt-8"
      >
        <SwiperSlide className='shadow-lg bg-white py-8 px-4 md:m-5 rounded-lg border '>
            <div className='space-y-7'>
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
           </Rating>
                {/*text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                    "I absolutely loved this book! The characters were so well-developed and the plot kept me hooked from start to finish.It is so wonderful."
                    </p>
                    <Avatar img={propic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mia Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
         <SwiperSlide className='shadow-lg bg-white py-8 px-4 md:m-5 rounded-lg border w-96' >
            <div className='space-y-7'>
            <Rating>
                 <Rating.Star />
                 <Rating.Star />
                 <Rating.Star />
                 <Rating.Star />
                 <Rating.Star />
           </Rating>
                {/*text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                    "This book is a true gem. The author's beautiful prose and insightful commentary on the human experience make it a truly compelling and enriching read."
                    </p>
                    <Avatar img={team1} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Jacob Ling</h5>
                    <p className='text-base'>LNC, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-lg bg-white py-8 px-4 md:m-5 rounded-lg border w-96'>
            <div className='space-y-7'>
            <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false}  />
                  <Rating.Star filled={false} />
            </Rating>
                {/*text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                    "Hands down one of the best books I've read in years. The author's ability to tackle complex themes with nuance and sensitivity is truly remarkable."
                    </p>
                    <Avatar img={team2} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Ben Pils</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide  className='shadow-lg bg-white py-8 px-4 md:m-5 rounded-lg border w-96'>
            <div className='space-y-7'>
               <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
               </Rating>
                {/*text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                       What a fantastic book! The author's masterful writing style and ability to create a vivid and immersive world really sets this book apart.I was captivated from page to the last."
                    </p>
                    <Avatar img={team3} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Daniel kuve</h5>
                    <p className='text-base'>T.A, F.R Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-lg bg-white py-8 px-4 md:m-5 rounded-lg border w-96'>
            <div className='space-y-7'>
            <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
            </Rating>
                {/*text */}
                <div className='mt-7 '>
                    <p className='mb-5 w-full'>
                    "This book is an absolute must-read. The characters are so well-crafted and the story is both engaging and thought-provoking.this book is very Good. "
                    </p>
                    <Avatar img={team5} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>William Dan</h5>
                    <p className='text-base'>LLC, PLC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-lg bg-white py-8 px-4 md:m-5 rounded-lg border w-96'>
            <div className='space-y-7'>
            <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
             </Rating>
                {/*text */}
                <div className='mt-7'>
                    <p className='mb-5'>
                    "I can't recommend this book highly enough. The author's storytelling prowess and ability to tackle complex issues with sensitivity,it is a fantasy thing."
                    </p>
                    <Avatar img={team6} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Alex Livt</h5>
                    <p className='text-base'>CEO, B.V. Company</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
  </div>
     );
}
 
export default Review;