export const scrollWithOffset = (el: any) => {
    const offset = 80;
    const elementPosition = el.offsetTop - offset;
    window.scroll({
        top: elementPosition,
        behavior: 'smooth'
    });
};
