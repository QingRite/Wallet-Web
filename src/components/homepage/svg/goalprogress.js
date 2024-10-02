import React from 'react';
function Goalprogress({progress}) {
    const goalProgressContainerStyle = {
        display: 'inline-block',
        margin: '10px',
    }
    
    const progressBarStyle = {
        transition: 'stroke-dashoffset 0.5s',
    }

    const goalProgressBarStyle = {
        transform: 'rotate(270deg)',
        width: '100px',
        height: '100px',
        margin: '0',
        padding: '0',

    }

    const goalProgressTextStyle = {
        position: 'absolute',
        display: 'inline-block',
        fontSize: '22px',
        height: '40px',
        width: '40px',
        margin: '30px'
    }

    return (
        <div style={goalProgressContainerStyle}>
            <h1>Budget</h1>
            <h2 style={goalProgressTextStyle}>{progress}</h2>
            <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" style={goalProgressBarStyle}>
                <circle class="donut-ring" r="45" cx="50" cy="50" fill= "none" stroke= "#e6e6e6" stroke-width= "10"/>
                <circle class="donut-segment" r="45" cx="50" cy="50" fill= "none" stroke= "#4caf50" stroke-width= "10" stroke-linecap= "round" stroke-dasharray="282.6" stroke-dashoffset={progress} style={progressBarStyle}/>
            </svg>
        </div>
    )
}

export default Goalprogress;