import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import {useLocation} from "react-router-dom"

function ScrollToTop() {

    // it is for when routes change, it will go top-side
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // it will show or hide scroll to top button based on scroll position
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return showScrollTop && (
        <div
            className='w-10 h-10 flex items-center justify-center border border-gray-400 fixed bottom-4 right-[50%] bg-white p-3 rounded-full z-50 animate-bounce'
            onClick={scrollToTop}>
            <FaArrowUp />
        </div>
    )
}

export default ScrollToTop