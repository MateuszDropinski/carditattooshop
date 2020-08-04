import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const scrollWithOffset = (el: any) => {
    const offset = 80;
    const elementPosition = el.offsetTop - offset;
    window.scroll({
        top: elementPosition,
        behavior: 'smooth'
    });
};

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
