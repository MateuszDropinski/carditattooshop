import React from 'react';

import { ABOUT } from '../../content/about';
import ImageTextSection from './ImageTextSection';

const About = () => (
    <ImageTextSection
        link='/o-nas'
        id='o-nas'
        img={ABOUT.img}
        imgAlt={ABOUT.imgAlt}
        header='O nas'
        text={ABOUT.textShortcut}
        reverse={false} />
);

export default About;
