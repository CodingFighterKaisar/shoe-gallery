import React from 'react';
import News from '../News/News';
import dhaka from "../../../src/assets/images/news/dhaka.jpg"
import chittagong from "../../../src/assets/images/news/chittagong.jpg"
import rajshahi from "../../../src/assets/images/news/rajshahi.jpg"

const LatestNews = () => {
    const news = [
        {
            id: 1,
            title: "New Showroom revealed in Dhaka",
            date: "21 Jul 22",
            image: dhaka,
        },
        {
            id: 2,
            title: "Chittagong has started new revolution ",
            date: "10 Nov 23",
            image: chittagong,
        },
        {
            id: 3,
            title: "What a showroom revealed in Rajshahi",
            date: "15 Sep 22",
            image: rajshahi,
        },
    ]
    return (
        <div className='my-20'>
            <div className='flex flex-col justify-center items-center gap-6 font-semibold tracking-wider'>
                <h4 className='text-md uppercase'>Latest News Here</h4>
                <h2 className='text-4xl font-bold tracking-wide uppercase'>Our Revealed new Showroom</h2>
            </div>
            <div className='grid grid-cols-3 gap-6 mx-10'>
                {
                    news.map(item => <News key={item.id} item={item}></News>)
                }

            </div>
        </div>
    );
};

export default LatestNews;