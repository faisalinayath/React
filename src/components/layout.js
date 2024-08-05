import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="google.com">React App</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/products">Products</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="google.com">Pricing</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link disabled" to="google.com">Disabled</Link>
            </li>
            </ul>
        </div>
        </nav>
    );
}

export function Footer(){
    return (
        <footer class="bg-body-tertiary text-center text-lg-start">
         
            <div class="text-center p-3" >
                © 2020 Copyright:
                <a class="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    );
}