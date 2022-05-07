import React from 'react';
import loadingGif from '../../tools/loader.gif'

const Loader = () => {
    return (
        <div style={{width: '100%' , display: 'flex' , justifyContent: 'center'}}>
            <img src={loadingGif} style={{width: '250px'}} />
        </div>
    );
};

export default Loader;