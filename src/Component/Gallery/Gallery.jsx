import React from 'react';
import PhotoAlbum from 'react-photo-album';

const Gallery = () => {
    const photos = [
        {

            src: "https://images.unsplash.com/photo-1667453799963-5509cd48986a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBnYWxsZXJ5fGVufDB8fDB8fHww",
            width: 4,
            height: 3,
        },
        {

            src: "https://images.unsplash.com/photo-1449445894928-d3280a99ee12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXMlMjBnYWxsZXJ5fGVufDB8fDB8fHww",
            width: 1,
            height: 1,
        },
        {
            src: "https://images.unsplash.com/photo-1678266622738-71ce6de1887b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXMlMjBnYWxsZXJ5fGVufDB8fDB8fHww",
            width: 1,
            height: 1,
        },
        {
            src: "https://images.unsplash.com/photo-1667453799963-5509cd48986a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBnYWxsZXJ5fGVufDB8fDB8fHww",
            width: 1,
            height: 1,
        },
        {
            src: "https://images.unsplash.com/photo-1667453799963-5509cd48986a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBnYWxsZXJ5fGVufDB8fDB8fHww",
            width: 1,
            height: 1,
        },
        {
            src: "https://images.unsplash.com/photo-1678266546811-35f678723291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXMlMjBnYWxsZXJ5fGVufDB8fDB8fHww",
            width: 1,
            height: 1,
        },
        {
            src: "https://images.unsplash.com/photo-1678266622946-668ede09af9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXMlMjBnYWxsZXJ5fGVufDB8fDB8fHww",
            width: 1,
            height: 1,
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1683140790296-6815a1675b75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXMlMjBnYWxsZXJ5fGVufDB8fDB8fHww",
            width: 1,
            height: 1,
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1679634981230-742b9bf7d150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNob2VzJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
            width: 4,
            height: 2,
        },
        {
            src: "https://images.unsplash.com/photo-1575404286468-c271873f52ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNob2VzJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
            width: 1,
            height: 1,
        },
        {
            src: "https://images.unsplash.com/photo-1616526038611-5af1bbdbcb21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNob2VzJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
            width: 2,
            height: 3,
        },
        {
            src: "https://images.unsplash.com/photo-1692843182861-d6ae852182cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNob2VzJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
            width: 2,
            height: 3,
        },
        {
            src: "https://images.unsplash.com/photo-1590457428824-1ee3e1824234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHNob2VzJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
            width: 2,
            height: 3,
        },
    ]
    return (
        <div className='bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 ' id='gallery'>
            <div className='flex flex-col justify-center items-center gap-4 py-10'>
                <h2 className='text-5xl uppercase font-bold bg-gradient-to-r from-cyan-200 via-cyan-400 to-purple-700 p-4 rounded-br-2xl rounded-tl-2xl'>Our Exclusive Shoes Gallery</h2>
                <p className='text-xl font-semibold py-4 px-8 uppercase '>We are decorated our shoes gallery in a significant was that can expressed your joy and philosophy</p>
            </div>
            <PhotoAlbum layout="rows" photos={photos} />
        </div>
    );
};

export default Gallery;