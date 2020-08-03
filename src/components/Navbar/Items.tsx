import React from 'react';
import { Facebook, Instagram } from 'react-feather';
import styled from 'styled-components';

import { StyledAnchor, StyledLink, StyledExternalAnchor } from '../styledComponents';
import { scrollWithOffset } from '../../utils/scroll';

type Props = {
    activeTab?: string
}

const Items: React.FC<Props> = ({ activeTab }) => {
    const getClassName = (tab: string) => activeTab === tab ? 'active-tab' : '';

    return (
        <ul>
            <ListItem className={getClassName('o-nas')}>
                <StyledAnchor to='/o-nas'>
                    O nas
                </StyledAnchor>
            </ListItem>
            <ListItem>
                <StyledLink scroll={scrollWithOffset} to='/#zespol'>
                    Zespół
                </StyledLink>
            </ListItem>
            <ListItem className={getClassName('laser')}>
                <StyledAnchor to='/laser'>
                    Laser
                </StyledAnchor>
            </ListItem>
            <ListItem className={getClassName('blog')}>
                <StyledAnchor to='/blog'>
                    Blog
                </StyledAnchor>
            </ListItem>
            <ListItem className={getClassName('faq')}>
                <StyledAnchor to='/faq'>
                    FAQ
                </StyledAnchor>
            </ListItem>
            <ListItem>
                <StyledLink scroll={scrollWithOffset} to='/#kontakt'>
                    Kontakt
                </StyledLink>
            </ListItem>
            <ListItem className={getClassName('regulamin')}>
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
}

const ListItem = styled.li`
    display: flex;
`;

export default Items;
