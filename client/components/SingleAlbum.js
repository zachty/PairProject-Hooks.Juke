import React from 'react';
import Album from './Album';
import Song from './Song';

export default function SingleAlbum(props) {
    return (
        <div id="single-album" className="column">
            <Album album={props.album} />
            <table id="songs">
                <tbody>
                    <tr className="gray">
                        <td />
                        <td>#</td>
                        <td>Name</td>
                        <td>Artist</td>
                        <td>Genre</td>
                    </tr>
                    {props.album.songs.map((song, index) => (
                        <Song
                            key={song.id}
                            song={song}
                            track={index + 1}
                            artist={props.album.artist.name}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
