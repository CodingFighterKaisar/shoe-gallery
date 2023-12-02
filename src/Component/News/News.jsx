import React from 'react';
import { Link } from 'react-router-dom';

const News = ({ item }) => {
    const { date, title, image } = item
    return (
        <div className='my-10 relative  '>
            <div>
                <img src={image} className='rounded-lg' alt="" />
            </div>
            <div className='flex justify-center items-center '>
                <div className='absolute bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400 -mt-24 px-6 w-64 py-6 rounded-md'>
                    <p className='pb-4 text-right'>{date}</p>
                    <h2 className='text-lg text-left font-semibold mb-6'>{title}</h2>
                    <button className='bg-gray-500 py-2 px-3 rounded-lg text-white'>Read News</button>
                </div>
            </div>
        </div>
    );
};

export default News; 