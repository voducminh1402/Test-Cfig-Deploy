import React from 'react';
import SongList from './components/SongList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {

    const songList = [
        {
            id: 1,
            name: "K-Pop Remix",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/8/7/f/e/87fe6682d8992e0ef432052a8cf682a4.jpg"
        },
        {
            id: 2,
            name: "Vinahouse Remix",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/9/9/0/7/99072b87f193039cb829fec954268f8a.jpg"
        },
        {
            id: 3,
            name: "Remix Viet Moi Nhat",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/d/9/3/4/d93479e5b164c28fd7fb7be4a3f208b8.jpg"
        }
    ]

    return (
        <div>
            <SongList songList={songList}/>
        </div>
    );
}

export default AlbumFeature;