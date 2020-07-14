import React from 'react';
import styled from 'styled-components';

import Artist from './Artist';
import { StyledSection, SectionHeader } from '../styledComponents';
import { ARTISTS } from '../../content/artists';

const Team = () => (
    <Section id="zespol">
        <SectionHeader>Nasz zespół</SectionHeader>
        <ArtistsWrapper>
            {
                ARTISTS.map((artist) => <Artist key={artist.alias} {...artist} />)
            }
        </ArtistsWrapper>
    </Section>
);

const Section = styled(StyledSection)`
    flex-direction: column;
    align-items: center;
`;

const ArtistsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export default Team;
