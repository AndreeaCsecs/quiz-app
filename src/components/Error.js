import React from 'react';
import {Link} from 'react-router-dom';

function Error() {
    return (
        <div className="error-page">
            <div className="message">
                <div className="icon">👻</div>
                <span>Page not found!</span>
            </div>
            <Link className="error-link" to="/">
                <span>Back to the game</span>
            </Link>
        </div>
    );
}

export default Error;
