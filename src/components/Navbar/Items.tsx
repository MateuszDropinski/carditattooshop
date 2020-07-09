import React from 'react';
import { Facebook, Instagram } from 'react-feather';

import { StyledAnchor } from '../styledComponents';
import styled from 'styled-components';

const Items = () => (
    <ul>
        <ListItem>
            <StyledAnchor>
                O nas
            </StyledAnchor>
        </ListItem>
        <ListItem>
            <StyledAnchor>
                Zespół
            </StyledAnchor>
        </ListItem>
        <ListItem>
            <StyledAnchor>
                Laser
            </StyledAnchor>
        </ListItem>
        <ListItem>
            <StyledAnchor>
                Blog
            </StyledAnchor>
        </ListItem>
        <ListItem>
            <StyledAnchor>
                FAQ
            </StyledAnchor>
        </ListItem>
        <ListItem>
            <StyledAnchor>
                Kontakt
            </StyledAnchor>
        </ListItem>
        <ListItem>
            <StyledAnchor>
                <Facebook size={26} />
            </StyledAnchor>
        </ListItem>
        <ListItem>
            <StyledAnchor>
                <Instagram size={26} />
            </StyledAnchor>
        </ListItem>
    </ul>
);

const ListItem = styled.li`
    display: flex;
`;

export default Items;
