import React from 'react';

// TODO: Import default layout

// Example:
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const DefaultLayout = ({ children }) => (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
)

export default DefaultLayout;