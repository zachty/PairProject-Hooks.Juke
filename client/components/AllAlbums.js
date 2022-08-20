import React from 'react';
import Album from './Album';

export default function AllAlbums(props) {
    return (
        <div id="albums" className="row wrap">
            {props.albumList.map(album => (
                <Album key={album.id} album={album} />
            ))}
        </div>
    );
}
