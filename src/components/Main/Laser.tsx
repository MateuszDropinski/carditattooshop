import React from 'react';

import ImageTextSection from './ImageTextSection';
import { LASER } from '../../content/laser';

const Laser = () => (
    <ImageTextSection
        link='/laser'
        id='laser'
        img={LASER.img}
        imgAlt={LASER.imgAlt}
        header='Laser'
        text={LASER.textShortcut}
        reverse />
);

export default Laser;
