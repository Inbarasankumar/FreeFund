import React from 'react';
import './loader.scss';

const LoadingIndicator = () => (
    <div className="loader text-secondary" role="status">
        <span className="sr-only">Loading...</span>
    </div>
);

export default LoadingIndicator;
