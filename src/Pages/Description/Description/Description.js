import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Description = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>There are all description:{news.length}</h2>
        </div>
    );
};

export default Description;