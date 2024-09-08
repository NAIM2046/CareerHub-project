import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            this is Error page !! <br />
           <Link to= "/" > Go back to Home</Link>
        </div>
        
    );
};

export default ErrorPage;