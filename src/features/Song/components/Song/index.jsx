import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Song.propTypes = {
    song: PropTypes.array.isRequired
};

function Song({song}) {
    return (
        <div className="song">
            <div className="song__thumbnails">
                <img src={song.thumbnailUrl} alt={song.name} />
            </div>
            <p className="song__name">{song.name}</p>
        </div>
        
    );
}

export default Song;