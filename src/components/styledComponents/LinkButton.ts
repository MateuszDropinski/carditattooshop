import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { anchorButtonStyles } from './AnchorButton';

const StyledAnchorButton = styled(Link)`
    ${anchorButtonStyles}
`;

export default StyledAnchorButton;
