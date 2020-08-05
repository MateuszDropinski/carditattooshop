import React from 'react';

import ImageTextSection from './ImageTextSection';
import { LASER } from '../../content/laser';

const Laser = () => (
    <ImageTextSection
        link='/laser'
        id='laser'
        img={LASER.images[0].src}
        imgAlt={LASER.images[0].alt}
        header={LASER.title}
        text={LASER.textShortcut}
        reverse />
);

export default Laser;
