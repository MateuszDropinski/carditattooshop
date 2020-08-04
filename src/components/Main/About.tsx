import React from 'react';

import { ABOUT } from '../../content/about';
import ImageTextSection from './ImageTextSection';

const About = () => (
    <ImageTextSection
        link='/o-nas'
        id='o-nas'
        img={ABOUT.images[0].src}
        imgAlt={ABOUT.images[0].alt}
        header={ABOUT.title}
        text={ABOUT.textShortcut}
        reverse={false} />
);

export default About;
