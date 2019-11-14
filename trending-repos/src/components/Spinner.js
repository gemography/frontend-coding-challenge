import React from 'react';

function Spinner () {
    return (
        <div className="ui segment">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
            </div>
        </div>
    );
}

export default Spinner;
