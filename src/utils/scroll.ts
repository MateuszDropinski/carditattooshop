import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const offset = 80;

export const scrollWithOffset = (el: any) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
        top: elementPosition,
        behavior: 'smooth'
    });
};

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [prevPathname, setPrevPathname] = useState(pathname);

    useEffect(() => {
        const slug = prevPathname.split('/')[2];
        const post = document.getElementById(slug);

        if (slug && pathname === '/blog' && post) {
            setTimeout(() => window.scrollTo(0, post.offsetTop - offset));
        } else {
            window.scrollTo(0, 0);
        }

        setPrevPathname(pathname);
        // eslint-disable-next-line
    }, [pathname]);

    return null;
};
