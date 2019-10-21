import React from 'react';
import './error-indicator.css';
import icon from './death-star.png'
const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <span className ='boom'>BooM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already send droids to fix it)
            </span>
        </div>
    );
};
export default ErrorIndicator;