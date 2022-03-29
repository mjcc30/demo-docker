import React from 'react';
import './spinner.css';


const Spinner = () => (
    <div className='spinner-overlay'>
        <div className='spinner-container' />
    </div>
);

export default React.memo(Spinner);