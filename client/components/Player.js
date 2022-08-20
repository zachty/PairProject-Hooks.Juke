import React from 'react';

export default function Player(props) {
    return (
        <div id="player-container">
            <div id="player-controls">
                <div className="row center">
                    <i
                        className="fa fa-step-backward"
                        onClick={() => props.clickNextLast(-1)}
                    ></i>
                    <i
                        className={
                            props.playing
                                ? 'fa fa-pause-circle'
                                : 'fa fa-play-circle'
                        }
                        onClick={props.clickPlayPause}
                    ></i>
                    <i
                        className="fa fa-step-forward"
                        onClick={() => props.clickNextLast(1)}
                    ></i>
                </div>
            </div>
        </div>
    );
}
