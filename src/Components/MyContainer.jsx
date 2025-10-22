import React, { Children } from 'react';

const MyContainer = ({ className, children }) => {
    return (
        <div className={`${className} container mx-auto`}>
            {children}
        </div>
    );
};

export default MyContainer;