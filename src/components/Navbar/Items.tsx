import React from 'react';
import { Facebook, Instagram } from 'react-feather';
import styled from 'styled-components';

import { StyledAnchor, StyledLink, StyledExternalAnchor } from '../styledComponents';
import { scrollWithOffset } from '../../utils/scroll';

const Items = () => (
    <ul>
        <ListItem>
            <StyledAnchor to='/o-nas'>
                O nas
            </StyledAnchor>
        </ListItem>
        <ListItem>
            <StyledLink scroll={scrollWithOffset} to='#zespol'>
                Zespół
            </StyledLink>
        </ListItem>
        <ListItem>
            <StyledAnchor to='/laser'>
                Laser
            </StyledAnchor>
        </ListItem>
        <ListItem>
            <StyledAnchor to='/blog'>
                Blog
            </StyledAnchor>
        </ListItem>
        <ListItem>
            <StyledAnchor to='/faq'>
                FAQ
            </StyledAnchor>
        </ListItem>
        <ListItem>
            <StyledLink scroll={scrollWithOffset} to='/#kontakt'>
                Kontakt
            </StyledLink>
        </ListItem>
        <ListItem>
            <StyledAnchor to='/regulamin'>
                Regulamin
            </StyledAnchor>
        </ListItem>
        <ListItem>
            <StyledExternalAnchor target='_blank' href='https://www.facebook.com/CardiTattooShop'>
                <Facebook size={26} />
            </StyledExternalAnchor>
        </ListItem>
        <ListItem>
            <StyledExternalAnchor target='_blank' href='https://www.instagram.com/carditattooshop/'>
                <Instagram size={26} />
            </StyledExternalAnchor>
        </ListItem>
    </ul>
);

const ListItem = styled.li`
    display: flex;
`;

export default Items;
