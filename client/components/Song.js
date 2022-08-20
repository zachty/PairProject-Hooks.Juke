import React from 'react';

export default function Song(props) {
    return (
        <tr className={props.currentSong.id === props.song.id ? 'active' : ''}>
            <td>
                <i
                    className={
                        props.currentSong.id === props.song.id && props.playing
                            ? 'fa fa-pause-circle'
                            : 'fa fa-play-circle'
                    }
                    onClick={() => props.clickPlay(props.song)}
                />
            </td>
            <td>{props.track}</td>
            <td>{props.song.name}</td>
            <td>{props.artist}</td>
            <td>{props.song.genre}</td>
        </tr>
    );
}
