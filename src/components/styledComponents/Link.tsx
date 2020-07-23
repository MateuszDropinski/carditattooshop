import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

import { anchorStyles } from './Anchor';

const StyledLink = styled(Link)`
    ${anchorStyles}
`;

export default StyledLink;
