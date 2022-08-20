import React from 'react';

export default function Song(props) {
    return (
        <tr>
            <td>
                <i className="fa fa-play-circle" />
            </td>
            <td>{props.track}</td>
            <td>{props.song.name}</td>
            <td>{props.artist}</td>
            <td>{props.song.genre}</td>
        </tr>
    );
}
