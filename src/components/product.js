import React from "react";

export function Product(){
    return(
        <div class="container my-5">
            <h2 className="text-center mb-3">Product Page</h2>
            <ProductList/>
            <ProductForm/>
        </div>
    );
}

function ProductList(){
    return (
        <>
            <h2 className="text-center mb-3">List Of Products</h2>
            <button type="button" className="btn btn-primary me-2">Create</button>
        </>
    );
}


function ProductForm(){
    return (
        <>
            <h2 className="text-center mb-3">Create A New Product</h2>
            <button type="button" className="btn btn-danger me-2">Cancel</button>
        </>
    );
}