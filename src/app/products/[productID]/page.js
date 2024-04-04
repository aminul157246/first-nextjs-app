import React from 'react';

const DynamicPage = ({params,searchParams}) => {


    console.log(params, searchParams);

    return (
        <div>
            <h3>Dynamic Page</h3>
            <h3>Dynamic Page : {params.productID} </h3>
            <h3>Search BY : {searchParams.category} & {searchParams.price} </h3>
        </div>
    );
};

export default DynamicPage;