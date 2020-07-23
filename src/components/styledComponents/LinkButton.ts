import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

import { anchorButtonStyles } from './AnchorButton';

const StyledAnchorButton = styled(Link)`
    ${anchorButtonStyles}
`;

export default StyledAnchorButton;
