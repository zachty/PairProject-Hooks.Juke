import React from 'react';

export default function Album(props) {
    return (
        <div className="album">
            <a>
                <img src={props.album.artworkUrl} />
                <p>{props.album.name}</p>
                <small>{props.album.artist.name}</small>
            </a>
        </div>
    );
}
