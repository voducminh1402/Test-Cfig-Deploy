import React from 'react';
import PropTypes from 'prop-types';
import Song from '../Song';
import './styles.scss'

SongList.propTypes = {
    songList: PropTypes.array.isRequired,
};

function SongList({songList}) {
    return (
        <ul className='song-list'>   
            {songList.map(song => (
                <li key={song.id}>
                    <Song song={song}/>
                </li>
            ))}
        </ul>
    );
}

export default SongList;