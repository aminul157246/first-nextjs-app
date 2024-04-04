import Image from 'next/image';
import React from 'react';
import image1 from '../../assests/images/img.png'
import image2 from '@/assests/images/img.png'

const AlbumPage = () => {
    return (
        <div>
            <h1>AlbumPage</h1>
            <Image src="https://img.freepik.com/free-vector/hot-dog-street-snack-isolated-transparent_107791-18353.jpg" width={500} height={500} alt="j"/>
            {/* <Image src="https://unsplash.com/photos/a-person-standing-in-front-of-a-mountain-range-q_v8G3Y-mrA" width={500} height={500} alt="j"/> */}
            <Image src={image1} width={500}  alt="j"/>
            <Image src={image2} width={500}  alt="j"/>
        </div>
    );
};

export default AlbumPage;